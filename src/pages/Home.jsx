import React from 'react'

const Home = ({ userData }) => {
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      
      <div className="section">
        <h3>Daily Check-in Bonus</h3>
        <p>Claim your daily reward and keep your streak!</p>
        
        <div className="days-grid">
          {[1, 2, 3, 4, 5, 6, 7, 15, 17, 20].map(day => (
            <div key={day} className="day-box">
              Day {day}
            </div>
          ))}
        </div>
        
        <div className="wait-message">
          <h4>💬 Wait For Next Day</h4>
        </div>
      </div>
      
      <div className="section">
        <h3>Invite Friends & Earn</h3>
        <p>Get 20% of their earnings</p>
      </div>
      
      <button className="cta-button">Start Referring</button>
    </div>
  )
}

export default Home