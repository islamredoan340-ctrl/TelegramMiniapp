const express = require('express');
const router = express.Router();

// Mock tasks data
const tasks = [
  { id: 1, channel: '@EARNING25M', reward: 1.00 },
  { id: 2, channel: '@oimbd', reward: 1.00 },
  { id: 3, channel: '@Bot_income_snt', reward: 1.00 }
];

// Get all tasks
router.get('/', (req, res) => {
  res.json({ success: true, tasks });
});

// Complete a task
router.post('/complete', (req, res) => {
  const { taskId, userId } = req.body;
  
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // In real app, save to database and update user balance
  res.json({
    success: true,
    reward: task.reward,
    message: 'Task completed successfully'
  });
});

module.exports = router;