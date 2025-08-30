import React from 'react';

const AdsTask = () => {
  return (
    <div className="section">
      <h2>Ads Task Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">20</div>
          <div className="stat-label">Daily Tasks Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">0</div>
          <div className="stat-label">Hourly Tasks Completed</div>
        </div>
      </div>

      <div style={{ margin: '20px 0', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
        <div>Limit: 40 tasks/day</div>
        <div>Limit: 20 tasks/hour</div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">170</div>
          <div className="stat-label">Lifetime Completed Tasks</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">280</div>
          <div className="stat-label">Total Earnings (BANANAS31)</div>
        </div>
      </div>

      <button className="submit-button" style={{ marginTop: '20px' }}>
        Start Task
      </button>
    </div>
  );
};

export default AdsTask;