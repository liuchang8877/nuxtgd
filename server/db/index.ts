import Database from 'better-sqlite3';
import { join } from 'path';

// 初始化 SQLite 数据库
const db = new Database(join(process.cwd(), 'db/database.sqlite'));

// 初始化表结构
db.exec(`
  CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;