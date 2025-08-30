import React from 'react';

const Referral = ({ user }) => {
  const referralLink = `https://t.me/InstaTasker_bot?startref=${user?.id || 'ref'}`;

  const shareToTelegram = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareToWhatsApp = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink};
    const url = https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareToTwitter = () => {
    const text = `Join InstaTasker and earn BANANAS31! Use my referral link: ${referralLink}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => alert('Referral link copied to clipboard!'))
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = referralLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Referral link copied to clipboard!');
      });
  };

  return (
    <div className="section">
      <h2>Refer & Earn Forever</h2>
      <p style={{ marginBottom: '20px' }}>
        Earn <strong>20%</strong> of your friends earnings for life!
      </p>
      
      <div style={{ marginBottom: '25px' }}>
        <h3>Follow these simple steps:</h3>
        <ol style={{ marginLeft: '20px', marginTop: '10px', lineHeight: '1.6' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Copy Your Link</strong> - Grab your unique referral link below.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Share with Friends</strong> - Use social media buttons to share your link.
          </li>
          <li>
            <strong>Earn Lifetime Rewards</strong> - Get 20% of your friends earnings forever!
          </li>
        </ol>
      </div>

      <h3>Your Referral Link</h3>
      <div className="referral-link">
        {referralLink}
      </div>

      <button 
        className="task-button" 
        style={{ width: '100%', marginBottom: '15px' }}
        onClick={copyToClipboard}
      >
        📋 Copy Link
      </button>

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

      <div style={{ 
        marginTop: '25px', 
        padding: '15px', 
        background: '#d4edda', 
        borderRadius: '10px',
        border: '1px solid #c3e6cb'
      }}>
        <h4>💡 Referral Benefits:</h4>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>20% of friend's earnings forever</li>
          <li>No limit on referrals</li>
          <li>Instant earnings tracking</li>
          <li>Weekly referral bonuses</li>
        </ul>
      </div>
    </div>
  );
};

export default Referral;