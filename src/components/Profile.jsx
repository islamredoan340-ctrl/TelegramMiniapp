import React from 'react';

const Profile = ({ user, balance }) => {
  const stats = {
    totalEarned: 280,
    currentStreak: 6,
    tasksDone: 170,
    referrals: 0
  };

  return (
    <div className="section">
      <h2>Profile Information</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
        <p><strong>Balance:</strong> {balance} BANANAS31</p>
        <p><strong>Joined:</strong> July 29, 2025</p>
      </div>

      <h3>Your Statistics</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.totalEarned}</div>
          <div className="stat-label">Total Earned</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.currentStreak}</div>
          <div className="stat-label">Current Streak (days)</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.tasksDone}</div>
          <div className="stat-label">Tasks Done</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.referrals}</div>
          <div className="stat-label">Referrals</div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Help Center</h3>
        <p><strong>Developer Contact:</strong> @InstaTaskerSupport</p>
      </div>

      <button className="submit-button" style={{ marginTop: '20px', background: '#dc3545' }}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;