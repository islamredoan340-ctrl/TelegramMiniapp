import React from 'react'

const TelegramTasks = ({ userData }) => {
  const tasks = [
    { channel: '@EARNING25M', reward: 1.00 },
    { channel: '@oimbd', reward: 1.00 },
    { channel: '@Bot_income_snt', reward: 1.00 }
  ]
  
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      
      <div className="section">
        <h3>Telegram Tasks</h3>
        
        {tasks.map((task, index) => (
          <div key={index} className="telegram-task">
            <p className="channel-name">{task.channel}</p>
            <p className="task-description">Join channel to earn</p>
            <p className="reward">{task.reward} BANANAS31</p>
            
            <div className="task-actions">
              <button className="join-btn">Join</button>
              <button className="verify-btn">Verify</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TelegramTasks