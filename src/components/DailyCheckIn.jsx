import React from 'react';

const DailyCheckIn = () => {
  const days = [1, 2, 3, 4, 5, 6, 7, 15, 17, 20];
  const currentDay = 6;

  return (
    <div className="section">
      <h2>Daily Check-in Bonus</h2>
      <p>Claim your daily reward and keep your streak!</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '10px', 
        margin: '20px 0' 
      }}>
        {days.map(day => (
          <div
            key={day}
            style={{
              padding: '10px',
              background: day <= currentDay ? '#28a745' : '#6c757d',
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

      <div style={{ marginTop: '20px' }}>
        <h3>Invite Friends & Earn</h3>
        <p>Get 20% of their earnings</p>
        <button className="submit-button" style={{ marginTop: '10px' }}>
          Start Referring
        </button>
      </div>
    </div>
  );
};

export default DailyCheckIn;