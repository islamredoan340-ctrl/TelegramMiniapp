import React from 'react'

const Profile = ({ userData }) => {
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      <p className="joined-date">Joined {userData.joinedDate}</p>
      
      <div className="section">
        <h3>Your Statistics</h3>
        
        <div className="stats-grid">
          <div className="stat-item">
            <p className="stat-label">Total Earned</p>
            <p className="stat-value">{userData.totalEarned}</p>
            <p className="stat-unit">BANANAS31</p>
          </div>
          
          <div className="stat-item">
            <p className="stat-label">Current Streak</p>
            <p className="stat-value">{userData.currentStreak}</p>
            <p className="stat-unit">days</p>
          </div>
          
          <div className="stat-item">
            <p className="stat-label">Tasks Done</p>
            <p className="stat-value">{userData.tasksDone}</p>
          </div>
          
          <div className="stat-item">
            <p className="stat-label">Referrals</p>
            <p className="stat-value">{userData.referrals}</p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h3>Help Center</h3>
        <h4>Developer Contact</h4>
      </div>
      
      <button className="logout-btn">Log Out</button>
    </div>
  )
}

export default Profile