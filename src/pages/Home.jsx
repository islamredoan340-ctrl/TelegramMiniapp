import React from 'react';

const Home = ({ balance }) => {
  return (
    <div>
      <div className="section">
        <h2>Welcome to InstaTasker!</h2>
        <p>Complete tasks and earn BANANAS31 rewards.</p>
        <p>Current Balance: <strong>{balance} BANANAS31</strong></p>
      </div>

      <div className="section">
        <h2>Daily Check-in Bonus</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '10px', 
          margin: '20px 0' 
        }}>
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <div
              key={day}
              style={{
                padding: '10px',
                background: day <= 6 ? '#28a745' : '#6c757d',
                color: 'white',
                borderRadius: '5px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              Day {day}
            </div>
          ))}
        </div>
        
        <div style={{ 
          padding: '15px', 
          background: '#ffc107', 
          borderRadius: '8px', 
          textAlign: 'center',
          margin: '15px 0'
        }}>
          💬 Wait For Next Day
        </div>
      </div>
    </div>
  );
};

export default Home;