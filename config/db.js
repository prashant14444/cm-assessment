import pkg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config(); // loading all the .env variables

const { Pool } = pkg;
const pool = new Pool({
    user: process.env.DB_USER_NAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function connectToDatabase() {
    await pool.connect();
    console.log('Connected to the database successfully');
    return true;
}

const dbConnection = {
    connectToDatabase,
    pool
}

export default dbConnection;