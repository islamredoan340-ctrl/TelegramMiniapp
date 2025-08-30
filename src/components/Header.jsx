import React from 'react';

const Header = ({ user, balance, onSectionChange, currentSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'ads', label: 'Ads Task' },
    { id: 'tg-tasks', label: 'TG Tasks' },
    { id: 'refer', label: 'Refer' },
    { id: 'withdraw', label: 'Withdraw' },
    { id: 'profile', label: 'Profile' }
  ];

  return (
    <header className="header">
      <div className="user-info">
        <h2>{user ? `${user.firstName} ${user.lastName || ''}` : 'User'}</h2>
        <div className="balance">Balance: {balance} BANANAS31</div>
      </div>
      
      <nav className="nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => onSectionChange(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;