const express = require('express');
const router = express.Router();

router.post('/check-in', (req, res) => {
  const { userId } = req.body;
  
  // In a real app, you would:
  // 1. Check if user already checked in today
  // 2. Update streak
  // 3. Add reward to balance
  
  res.json({
    success: true,
    reward: 5, // Example reward
    streak: 6, // Example updated streak
    message: 'Daily check-in successful'
  });
});

module.exports = router;