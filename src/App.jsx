import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AdsTask from './components/AdsTask';
import TelegramTasks from './components/TelegramTasks';
import Referral from './components/Referral';
import Withdraw from './components/Withdraw';
import Profile from './components/Profile';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(343);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Telegram WebApp initialization
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      
      // Get user data from Telegram
      const userData = tg.initDataUnsafe?.user;
      if (userData) {
        setUser({
          id: userData.id,
          firstName: userData.first_name,
          lastName: userData.last_name,
          username: userData.username
        });
      }
    }
  }, []);

  const handleTaskComplete = async (taskId, reward) => {
    try {
      // API call to backend
      const response = await fetch('/api/tasks/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, userId: user?.id }),
      });
      
      const data = await response.json();
      if (data.success) {
        setBalance(prev => prev + reward);
        alert(`Task completed! You earned ${reward} BANANAS31`);
      }
    } catch (error) {
      console.error('Task completion error:', error);
    }
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'ads':
        return <AdsTask />;
      case 'tg-tasks':
        return <TelegramTasks onTaskComplete={handleTaskComplete} />;
      case 'refer':
        return <Referral user={user} />;
      case 'withdraw':
        return <Withdraw balance={balance} />;
      case 'profile':
        return <Profile user={user} balance={balance} />;
      default:
        return <Home balance={balance} />;
    }
  };

  return (
    <div className="app">
      <Header 
        user={user} 
        balance={balance} 
        onSectionChange={setCurrentSection} 
        currentSection={currentSection}
      />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;