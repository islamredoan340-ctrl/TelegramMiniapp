const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  telegramId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 0
  },
  joinedDate: {
    type: Date,
    default: Date.now
  },
  totalEarned: {
    type: Number,
    default: 0
  },
  currentStreak: {
    type: Number,
    default: 0
  },
  tasksDone: {
    type: Number,
    default: 0
  },
  referrals: {
    type: Number,
    default: 0
  },
  completedTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  lastDailyClaim: {
    type: Date
  },
  pendingWithdrawals: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)