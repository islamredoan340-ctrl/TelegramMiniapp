const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id, first_name, last_name, username } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Telegram ID is required' });
    }

    // Check if user exists
    let user = await User.findByTelegramId(id);
    
    if (!user) {
      // Create new user
      await User.create({ id, first_name, last_name, username });
      user = await User.findByTelegramId(id);
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        telegram_id: user.telegram_id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        balance: user.balance,
        streak: user.streak
      }
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;