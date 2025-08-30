import React from 'react';

const TelegramTasks = ({ onTaskComplete }) => {
  const tasks = [
    { id: 1, channel: '@EARNING25M', reward: 1.00, action: 'Join' },
    { id: 2, channel: '@oimbd', reward: 1.00, action: 'Join' },
    { id: 3, channel: '@Bot_income_snt', reward: 1.00, action: 'Join' }
  ];

  const handleJoinClick = (task) => {
    // Open Telegram channel
    window.open(`https://t.me/${task.channel.replace('@', '')}`, '_blank');
    
    // After 3 seconds, allow verification
    setTimeout(() => {
      if (window.confirm('Have you joined the channel?')) {
        onTaskComplete(task.id, task.reward);
      }
    }, 3000);
  };

  return (
    <div className="section">
      <h2>Telegram Tasks</h2>
      
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-info">
            <div style={{ fontWeight: 'bold' }}>{task.channel}</div>
            <div>Join channel to earn</div>
            <div className="task-reward">{task.reward} BANANAS31</div>
          </div>
          <div>
            <button 
              className="task-button"
              onClick={() => handleJoinClick(task)}
            >
              {task.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TelegramTasks;