const db = require('../db');
import type { Cr } from '../models/dbTypesModel';

const getAllUndocumentedCRs = async (user_id: number): Promise<Cr[]> => {
    const result = await db.query(`
        SELECT * FROM cr
        WHERE is_documented = false
        AND id IN (
            SELECT cr_id FROM resp_user_in_cr
            WHERE user_id = $1
        )
    `, [user_id]);

    return result.rows as Cr[];
}