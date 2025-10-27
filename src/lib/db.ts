import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool {
  if (pool) return pool;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL não configurada");
  }
  pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 5,
  });
  return pool;
}

export async function ensureCommentsTable() {
  const p = getPool();
  await p.query(`
    CREATE TABLE IF NOT EXISTS comments (
      id TEXT PRIMARY KEY,
      name TEXT,
      message TEXT NOT NULL,
      created_at BIGINT NOT NULL,
      approved BOOLEAN NOT NULL
    );
  `);
  await p.query(`
    CREATE INDEX IF NOT EXISTS comments_created_at_idx ON comments(created_at);
  `);
}