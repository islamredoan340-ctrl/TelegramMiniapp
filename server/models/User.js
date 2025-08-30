const db = require('../config/database');

class User {
  static findByTelegramId(telegramId) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE telegram_id = ?', [telegramId], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static create(userData) {
    return new Promise((resolve, reject) => {
      const { id, first_name, last_name, username } = userData;
      const referralCode = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      db.run(
        `INSERT INTO users (telegram_id, first_name, last_name, username, referral_code) 
         VALUES (?, ?, ?, ?, ?)`,
        [id, first_name, last_name, username, referralCode],
        function(err) {
          if (err) reject(err);
          else resolve({ id: this.lastID });
        }
      );
    });
  }

  static updateBalance(userId, amount) {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE users SET balance = balance + ? WHERE id = ?',
        [amount, userId],
        function(err) {
          if (err) reject(err);
          else resolve({ changes: this.changes });
        }
      );
    });
  }
}

module.exports = User;