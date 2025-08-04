// backend/db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const dbFile = process.env.DB_FILE || './data/tasks.db';
const dir = path.dirname(dbFile);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

export async function initDb() {
  const db = await open({
    filename: dbFile,
    driver: sqlite3.Database
  });
  await db.run('PRAGMA journal_mode = WAL');
  await db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      title     TEXT    NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0
    )
  `);
  return db;
}
