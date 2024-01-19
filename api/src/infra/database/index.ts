import { Pool } from 'pg';
console.log(process.env.PORT);

const pool = new Pool({
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
});

export default pool;