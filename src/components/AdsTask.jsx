import React from 'react'

const AdsTask = ({ userData }) => {
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      
      <div className="section">
        <h3>Ads Task Overview</h3>
        
        <div className="task-overview">
          <div className="task-column">
            <h4>Daily Tasks</h4>
            <p className="completed">Completed</p>
            <p className="count">20</p>
          </div>
          
          <div className="task-column">
            <h4>Hourly Tasks</h4>
            <p className="completed">Completed</p>
            <p className="count">0</p>
          </div>
        </div>
        
        <div className="task-limits">
          <p>Limit: 40 tasks/day</p>
          <p>Limit: 20 tasks/hour</p>
        </div>
        
        <div className="lifetime-stats">
          <div className="stat">
            <p>Lifetime Completed Tasks</p>
            <p className="count">170</p>
          </div>
          
          <div className="stat">
            <p>Total Earnings</p>
            <p className="count">280</p>
          </div>
        </div>
      </div>
      
      <button className="cta-button">Start Task</button>
    </div>
  )
}

export default AdsTask