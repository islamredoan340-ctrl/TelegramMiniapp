const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const User = require('../models/User')

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Complete a task
router.post('/complete', async (req, res) => {
  try {
    const { userId, taskId } = req.body
    
    const task = await Task.findById(taskId)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    
    // Check if user already completed this task
    if (user.completedTasks.includes(taskId)) {
      return res.status(400).json({ message: 'Task already completed' })
    }
    
    // Update user balance and completed tasks
    user.balance += task.reward
    user.totalEarned += task.reward
    user.tasksDone += 1
    user.completedTasks.push(taskId)
    
    await user.save()
    
    res.json({ 
      message: 'Task completed successfully', 
      newBalance: user.balance 
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router