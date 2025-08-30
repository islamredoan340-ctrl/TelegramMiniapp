const express = require('express');
const router = express.Router();

router.post('/check-in', (req, res) => {
  res.json({
    success: true,
    reward: 5,
    streak: 6,
    message: 'Daily check-in successful'
  });
});

module.exports = router;