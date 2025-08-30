import React from 'react';

const Profile = ({ user, balance }) => {
  const stats = {
    totalEarned: 280,
    currentStreak: 6,
    tasksDone: 170,
    referrals: 0,
    joinedDate: 'July 29, 2025'
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      alert('Logged out successfully');
      // In real app, you would clear user session
    }
  };

  return (
    <div className="section">
      <h2>Profile Information</h2>
      
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
        <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
        <p><strong>User ID:</strong> {user?.id || 'N/A'}</p>
        <p><strong>Balance:</strong> {balance} BANANAS31</p>
        <p><strong>Joined:</strong> {stats.joinedDate}</p>
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

      <div style={{ marginTop: '30px', padding: '15px', background: '#e9ecef', borderRadius: '10px' }}>
        <h3>Help Center</h3>
        <p><strong>Developer Contact:</strong> @InstaTaskerSupport</p>
        <p><strong>Email:</strong> support@instatasker.com</p>
        <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#666' }}>
          For any issues or questions, please contact our support team.
        </p>
      </div>

      <button 
        className="submit-button" 
        style={{ 
          marginTop: '20px', 
          background: '#dc3545',
          width: '100%'
        }}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;