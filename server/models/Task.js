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
          else resolve({ id: this.lastID });
        }
      );
    });
  }
}

module.exports = Task;