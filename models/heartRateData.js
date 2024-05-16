import dbConnection from "../config/db.js";

export const storeHeartRateData = async (data) => {
    const client = await dbConnection.pool.connect();
    try {
        await client.query('BEGIN');
        for (const entry of data) {
            await client.query(
                'INSERT INTO heart_rate (from_date, to_date, low, high) VALUES ($1, $2, $3, $4)',
                [entry.from_date, entry.to_date, entry.measurement.low, entry.measurement.high]
            );
        }
        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');
        throw e;
    } finally {
        client.release();
    }
};
