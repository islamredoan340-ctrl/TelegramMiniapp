import React from 'react'

const Header = ({ userData }) => {
  return (
    <header className="header">
      <h1>InstaTasker</h1>
      <div className="user-info">
        <h2>{userData.name}</h2>
        <p>Balance: {userData.balance} BANANAS31</p>
      </div>
    </header>
  )
}

export default Header