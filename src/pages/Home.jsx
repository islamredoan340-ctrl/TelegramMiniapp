import React from 'react';
import DailyCheckIn from '../components/DailyCheckIn';

const Home = ({ balance }) => {
  return (
    <div>
      <DailyCheckIn />
      
      <div className="section">
        <h2>Welcome to InstaTasker!</h2>
        <p>Complete tasks and earn BANANAS31 rewards.</p>
        <p>Current Balance: <strong>{balance} BANANAS31</strong></p>
      </div>

      <div className="section">
        <h2>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button className="task-button">Daily Tasks</button>
          <button className="task-button">Telegram Tasks</button>
          <button className="task-button" style={{ gridColumn: 'span 2' }}>
            Invite Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;