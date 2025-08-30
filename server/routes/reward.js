const express = require('express');
const router = express.Router();

// Daily check-in reward
router.post('/check-in', (req, res) => {
  const { userId } = req.body;
  
  // In a real app, you would:
  // 1. Check if user already checked in today
  // 2. Update streak in database
  // 3. Add reward to user's balance
  
  res.json({
    success: true,
    reward: 5,
    streak: 6,
    message: 'Daily check-in successful'
  });
});

// Claim referral reward
router.post('/referral', (req, res) => {
  const { referrerId, refereeId } = req.body;
  
  res.json({
    success: true,
    reward: 10,
    message: 'Referral reward claimed'
  });
});

module.exports = router;