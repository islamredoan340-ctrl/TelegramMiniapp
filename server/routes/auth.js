const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Get user data
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Create new user
router.post('/register', async (req, res) => {
  try {
    const { telegramId, name } = req.body
    
    const newUser = new User({
      telegramId,
      name,
      balance: 0,
      joinedDate: new Date(),
      totalEarned: 0,
      currentStreak: 0,
      tasksDone: 0,
      referrals: 0
    })
    
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router