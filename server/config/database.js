const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = process.env.NODE_ENV === 'production' 
  ? path.join(__dirname, '../../database.sqlite')
  : './database.sqlite';

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
    
    db.serialize(() => {
      // Users table
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        telegram_id INTEGER UNIQUE,
        first_name TEXT,
        last_name TEXT,
        username TEXT,
        balance INTEGER DEFAULT 0,
        streak INTEGER DEFAULT 0,
        last_check_in DATE,
        joined_date DATE DEFAULT CURRENT_DATE,
        referral_code TEXT UNIQUE
      )`);
      
      // Tasks table
      db.run(`CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        type TEXT,
        completed_at DATE,
        reward INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`);
      
      // Transactions table (new)
      db.run(`CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        type TEXT,
        amount INTEGER,
        status TEXT,
        created_at DATE,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`);
      
      // Referrals table
      db.run(`CREATE TABLE IF NOT EXISTS referrals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        referrer_id INTEGER,
        referee_id INTEGER,
        created_at DATE DEFAULT CURRENT_DATE,
        FOREIGN KEY(referrer_id) REFERENCES users(id),
        FOREIGN KEY(referee_id) REFERENCES users(id)
      )`);
    });
  }
});

module.exports = db;