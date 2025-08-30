const db = require('../config/database');

class Transaction {
  static create(userId, type, amount, status = 'pending') {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO transactions (user_id, type, amount, status, created_at) 
         VALUES (?, ?, ?, ?, datetime('now'))`,
        [userId, type, amount, status],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }

  static findByUserId(userId) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC`,
        [userId],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }

  static updateStatus(transactionId, status) {
    return new Promise((resolve, reject) => {
      db.run(
        `UPDATE transactions SET status = ? WHERE id = ?`,
        [status, transactionId],
        function(err) {
          if (err) reject(err);
          else resolve({ changes: this.changes });
        }
      );
    });
  }
}

module.exports = Transaction;