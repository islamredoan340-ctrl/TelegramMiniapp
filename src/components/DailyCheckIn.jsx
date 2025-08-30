import React, { useState } from 'react';

const DailyCheckIn = () => {
  const [currentStreak, setCurrentStreak] = useState(6);
  const [claimedToday, setClaimedToday] = useState(false);

  const days = [1, 2, 3, 4, 5, 6, 7, 15, 17, 20];

  const handleClaimReward = () => {
    if (!claimedToday) {
      setCurrentStreak(prev => prev + 1);
      setClaimedToday(true);
      alert('Daily reward claimed! +5 BANANAS31');
    } else {
      alert('You have already claimed your reward today!');
    }
  };

  return (
    <div className="section">
      <h2>Daily Check-in Bonus</h2>
      <p>Claim your daily reward and keep your streak!</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '8px', 
        margin: '20px 0' 
      }}>
        {days.map(day => (
          <div
            key={day}
            style={{
              padding: '10px',
              background: day <= currentStreak ? '#28a745' : '#6c757d',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Day {day}
          </div>
        ))}
      </div>

      {claimedToday ? (
        <div style={{ 
          padding: '15px', 
          background: '#ffc107', 
          borderRadius: '8px', 
          textAlign: 'center',
          margin: '15px 0',
          color: '#856404'
        }}>
          💬 Wait For Next Day
        </div>
      ) : (
        <button 
          className="submit-button" 
          style={{ width: '100%' }}
          onClick={handleClaimReward}
        >
          🎁 Claim Daily Reward
        </button>
      )}

      <div style={{ marginTop: '25px' }}>
        <h3>Current Streak: {currentStreak} days 🔥</h3>
        <p>Keep coming back daily to increase your rewards!</p>
      </div>
    </div>
  );
};

export default DailyCheckIn;