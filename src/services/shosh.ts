const db = require('../db');
import type { ShoshWithCRs } from '../models/generalModel';

/**
 * Retrieves all Shoshes and their associated Change Requests (CRs) for a given project.
 *
 * @param {number} projectId - The ID of the project to retrieve Shoshes and CRs for.
 * @returns {Promise<ShoshWithCRs[]>} A promise that resolves to an array of Shoshes with their associated CRs.
 */
const getAllShoshesAndCRsByProject = async (projectId: number): Promise<ShoshWithCRs[]> => {
 const result = await db.query(`
    SELECT
      s.id AS shosh_id,
      s.name AS shosh_name,
      s.description AS shosh_description,
      s.jira_url AS shosh_jira_url,
      c.id AS cr_id,
      c.name AS cr_name,
      c.is_DDIC AS cr_is_DDIC,
      c.environment AS cr_environment,
      c.is_customization AS cr_is_customization,
      c.is_released AS cr_is_released,
      c.is_documented AS cr_is_documented,
      cs.relationship_description
    FROM
      shosh s
    JOIN
      cr_to_sosh cs ON cs.shosh_id = s.id
    JOIN
      cr c ON c.id = cs.cr_id
    WHERE
      s.project_id = $1
    ORDER BY s.id, c.id
  `, [projectId]);

  const shoshMap = new Map<number, ShoshWithCRs>();

  for (const row of result.rows) {
    const shoshId = row.shosh_id;

    if (!shoshMap.has(shoshId)) {
      shoshMap.set(shoshId, {
        id: row.shosh_id,
        name: row.shosh_name,
        project_id: row.project_id,
        description: row.shosh_description,
        jira_url: row.jira_url,
        crs: [],
      });
    }

    shoshMap.get(shoshId)!.crs.push({
      id: row.cr_id,
      name: row.cr_name,
      is_DDIC: row.is_ddic,
      environment: row.environment,
      is_customization: row.is_customization,
      is_released: row.is_released,
      is_documented: row.is_documented,
      relationDescription: row.relation_description,
    });
  }

  return Array.from(shoshMap.values());
}

module.exports = {
  getAllShoshesAndCRsByProject,
};
