import React from 'react'

const Referral = ({ userData }) => {
  const referralLink = "https://t.me/InstaTasker_bot?sta"
  
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      
      <div className="section">
        <h3>Refer & Earn Forever</h3>
        <p>Earn 20% of your friends earnings for life!</p>
        <p>Follow these simple steps to start:</p>
        
        <ol className="steps-list">
          <li><strong>Copy Your Link</strong> - Grab your unique referral link below.</li>
          <li><strong>Share with Friends</strong> - Use the Telegram, WhatsApp, or Twitter/X buttons to share your link.</li>
          <li><strong>Earn Lifetime Rewards</strong> - Get 20% of your friends earnings forever once they join!</li>
        </ol>
      </div>
      
      <div className="section">
        <h4>Your Referral Link</h4>
        <div className="referral-link">
          <input type="text" value={referralLink} readOnly />
          <button className="copy-btn">Copy</button>
        </div>
        
        <div className="share-buttons">
          <button className="share-btn telegram">Telegram</button>
          <button className="share-btn whatsapp">WhatsApp</button>
          <button className="share-btn twitter">Twitter/X</button>
        </div>
      </div>
    </div>
  )
}

export default Referral