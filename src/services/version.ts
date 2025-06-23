const db = require('../db');
import type { Version, CrInVersion } from '../models/dbTypesModel';

/**
 * Retrieves the current version from the database.
 * @returns {Promise<Version | null>} A promise that resolves to the current version or null if no version is found.
 */
const getCurrentVersion = async (): Promise<Version | null> => {
    const result = await db.query(`
        SELECT * FROM version
        WHERE date >= NOW()
        ORDER BY date ASC
        LIMIT 1
    `);
    
    if (result.rows.length === 0) {
        return null;
    }
    
    return result.rows[0] as Version;
}