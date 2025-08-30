const db = require('../config/database');

class Transaction {
  static create(userId, type, amount, status = 'pending') {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO transactions (user_id, type, amount, status) 
         VALUES (?, ?, ?, ?)`,
        [userId, type, amount, status],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }
}

module.exports = Transaction;