const db = require('../config/database');

class Task {
  static create(userId, type, reward) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO tasks (user_id, type, completed_at, reward) 
         VALUES (?, ?, datetime('now'), ?)`,
        [userId, type, reward],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID, reward });
        }
      );
    });
  }

  static findByUserId(userId) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM tasks WHERE user_id = ? ORDER BY completed_at DESC`,
        [userId],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }

  static getDailyCount(userId) {
    return new Promise((resolve, reject) => {
      db.get(
        `SELECT COUNT(*) as count FROM tasks 
         WHERE user_id = ? AND date(completed_at) = date('now')`,
        [userId],
        (err, row) => {
          if (err) reject(err);
          else resolve(row.count);
        }
      );
    });
  }

  static getTotalEarnings(userId) {
    return new Promise((resolve, reject) => {
      db.get(
        `SELECT SUM(reward) as total FROM tasks WHERE user_id = ?`,
        [userId],
        (err, row) => {
          if (err) reject(err);
          else resolve(row.total || 0);
        }
      );
    });
  }
}

module.exports = Task;