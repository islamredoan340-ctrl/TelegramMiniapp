const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Claim daily reward
router.post('/daily', async (req, res) => {
  try {
    const { userId } = req.body
    
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    
    const today = new Date().toDateString()
    const lastClaim = user.lastDailyClaim ? new Date(user.lastDailyClaim).toDateString() : null
    
    // Check if already claimed today
    if (lastClaim === today) {
      return res.status(400).json({ message: 'Daily reward already claimed today' })
    }
    
    // Calculate streak
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    
    if (lastClaim === yesterday.toDateString()) {
      user.currentStreak += 1
    } else {
      user.currentStreak = 1
    }
    
    // Calculate reward based on streak
    const baseReward = 10
    const streakBonus = Math.min(user.currentStreak * 2, 20) // Max bonus of 20
    const totalReward = baseReward + streakBonus
    
    // Update user
    user.balance += totalReward
    user.totalEarned += totalReward
    user.lastDailyClaim = new Date()
    
    await user.save()
    
    res.json({ 
      message: 'Daily reward claimed', 
      reward: totalReward, 
      newBalance: user.balance,
      streak: user.currentStreak
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router