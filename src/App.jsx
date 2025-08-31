import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import DailyCheckIn from './components/DailyCheckIn'
import AdsTask from './components/AdsTask'
import TelegramTasks from './components/TelegramTasks'
import Referral from './components/Referral'
import Withdraw from './components/Withdraw'
import Profile from './components/Profile'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [userData, setUserData] = useState({
    name: 'Nayem Islam',
    balance: 343,
    joinedDate: 'July 29, 2025',
    totalEarned: 280,
    currentStreak: 6,
    tasksDone: 170,
    referrals: 0
  })

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home userData={userData} />
      case 'daily': return <DailyCheckIn userData={userData} />
      case 'ads': return <AdsTask userData={userData} />
      case 'telegram': return <TelegramTasks userData={userData} />
      case 'refer': return <Referral userData={userData} />
      case 'withdraw': return <Withdraw userData={userData} />
      case 'profile': return <Profile userData={userData} />
      default: return <Home userData={userData} />
    }
  }

  return (
    <div className="app">
      <Header userData={userData} />
      <main className="main-content">
        {renderPage()}
      </main>
      <nav className="bottom-nav">
        <button 
          className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button 
          className={currentPage === 'ads' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('ads')}
        >
          Ads Task
        </button>
        <button 
          className={currentPage === 'telegram' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('telegram')}
        >
          TG Tasks
        </button>
        <button 
          className={currentPage === 'refer' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('refer')}
        >
          Refer
        </button>
        <button 
          className={currentPage === 'withdraw' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('withdraw')}
        >
          Withdraw
        </button>
        <button 
          className={currentPage === 'profile' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setCurrentPage('profile')}
        >
          Profile
        </button>
      </nav>
    </div>
  )
}

export default App