import React from 'react';

const TelegramTasks = () => {
  const tasks = [
    { channel: '@EARNING25M', reward: 1.00, action: 'Join' },
    { channel: '@oimbd', reward: 1.00, action: 'Join' },
    { channel: '@Bot_income_snt', reward: 1.00, action: 'Join' }
  ];

  return (
    <div className="section">
      <h2>Telegram Tasks</h2>
      
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="task-info">
            <div style={{ fontWeight: 'bold' }}>{task.channel}</div>
            <div>Join channel to earn</div>
            <div className="task-reward">{task.reward} BANANAS31</div>
          </div>
          <div>
            <button className="task-button">{task.action}</button>
            <button className="task-button" style={{ marginLeft: '10px', background: '#28a745' }}>
              Verify
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TelegramTasks;