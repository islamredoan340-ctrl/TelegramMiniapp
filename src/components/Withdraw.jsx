import React, { useState } from 'react';

const Withdraw = ({ balance }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Binance');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!amount || !address) {
      alert('Please fill all fields');
      return;
    }

    const amountNum = parseInt(amount);
    
    if (amountNum < 100) {
      alert('Minimum withdrawal is 100 BANANAS31');
      return;
    }
    
    if (amountNum > balance) {
      alert('Insufficient balance');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountNum,
          address,
          paymentMethod
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert(`✅ Withdrawal request submitted successfully!\n\nAmount: ${amountNum} BANANAS31\nAddress: ${address}\nMethod: ${paymentMethod}\n\nProcessing time: 24-48 hours`);
        setAmount('');
        setAddress('');
      } else {
        alert('❌ Withdrawal failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section">
      <h2>Withdraw Funds</h2>
      
      <div style={{ 
        marginBottom: '20px', 
        padding: '15px', 
        background: '#fff3cd', 
        borderRadius: '8px',
        border: '1px solid #ffeaa7'
      }}>
        <strong>⚠️ Important:</strong>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Minimum withdrawal: 100 BANANAS31</li>
          <li>Processing time: 24-48 hours</li>
          <li>Ensure wallet address is correct</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="withdraw-form">
        <div className="form-group">
          <label className="form-label">
            <strong>Amount (BANANAS31)</strong>
          </label>
          <input
            type="number"
            className="form-input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="100"
            max={balance}
            required
            disabled={isSubmitting}
          />
          <small>Available: {balance} BANANAS31 | Min: 100</small>
        </div>

        <div className="form-group">
          <label className="form-label">
            <strong>Withdrawal Address</strong>
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your wallet address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <strong>Payment Method</strong>
          </label>
          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            disabled={isSubmitting}
          >
            <option value="Binance">Binance</option>
            <option value="PayPal">PayPal</option>
            <option value="Skrill">Skrill</option>
            <option value="Neteller">Neteller</option>
            <option value="Perfect Money">Perfect Money</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Processing...' : '💸 Withdraw Now'}
        </button>
      </form>

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        background: '#e7f3ff', 
        borderRadius: '8px',
        border: '1px solid #b3d9ff'
      }}>
        <h4>📋 Supported Payment Methods:</h4>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Binance (USDT, BUSD, BNB)</li>
          <li>PayPal (USD)</li>
          <li>Skrill (USD, EUR)</li>
          <li>Neteller (USD, EUR)</li>
          <li>Perfect Money (USD)</li>
        </ul>
      </div>
    </div>
  );
};

export default Withdraw;