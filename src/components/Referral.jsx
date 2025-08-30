import React from 'react';

const Referral = ({ user }) => {
  const referralLink = `https://t.me/InstaTasker_bot?start=${user?.id || 'ref'}`;

  const shareToTelegram = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="section">
      <h2>Refer & Earn Forever</h2>
      <p>Earn 20% of your friends earnings for life!</p>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Follow these simple steps to start:</h3>
        <ol style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Copy Your Link</strong> - Grab your unique referral link below.</li>
          <li style={{ marginBottom: '10px' }}><strong>Share with Friends</strong> - Use the social media buttons to share your link.</li>
          <li><strong>Earn Lifetime Rewards</strong> - Get 20% of your friends earnings forever once they join!</li>
        </ol>
      </div>

      <h3>Your Referral Link</h3>
      <div className="referral-link">
        {referralLink}
      </div>

      <div className="social-buttons">
        <button className="social-button telegram" onClick={shareToTelegram}>
          Telegram
        </button>
        <button className="social-button whatsapp" onClick={shareToWhatsApp}>
          WhatsApp
        </button>
        <button className="social-button twitter" onClick={shareToTwitter}>
          Twitter/X
        </button>
      </div>
    </div>
  );
};

export default Referral;