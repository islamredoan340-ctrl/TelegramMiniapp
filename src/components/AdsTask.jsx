import React, { useState, useEffect } from 'react';

const AdsTask = () => {
  const [stats, setStats] = useState({
    dailyCompleted: 20,
    hourlyCompleted: 0,
    lifetimeCompleted: 170,
    totalEarnings: 280
  });

  return (
    <div className="section">
      <h2>Ads Task Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.dailyCompleted}</div>
          <div className="stat-label">Daily Tasks Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.hourlyCompleted}</div>
          <div className="stat-label">Hourly Tasks Completed</div>
        </div>
      </div>

      <div style={{ 
        margin: '20px 0', 
        padding: '15px', 
        background: '#f8f9fa', 
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <div><strong>Limit:</strong> 40 tasks/day</div>
        <div><strong>Limit:</strong> 20 tasks/hour</div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.lifetimeCompleted}</div>
          <div className="stat-label">Lifetime Completed Tasks</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{stats.totalEarnings}</div>
          <div className="stat-label">Total Earnings (BANANAS31)</div>
        </div>
      </div>

      <button 
        className="submit-button" 
        style={{ marginTop: '20px', width: '100%' }}
        onClick={() => alert('Starting ads task...')}
      >
        Start Task
      </button>
    </div>
  );
};

export default AdsTask;