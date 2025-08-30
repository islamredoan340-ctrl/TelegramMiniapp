import React, { useState } from 'react';

const Withdraw = ({ balance }) => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Binance');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Withdrawal request for ${amount} BANANAS31 to ${address} via ${paymentMethod} has been submitted!`);
  };

  return (
    <div className="section">
      <h2>Withdraw Funds</h2>
      
      <form onSubmit={handleSubmit} className="withdraw-form">
        <div className="form-group">
          <label><strong>Amount</strong></label>
          <input
            type="number"
            className="form-input"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="100"
            max={balance}
            required
          />
          <small>Minimum: 100 BANANAS31</small>
        </div>

        <div className="form-group">
          <label><strong>Withdrawal Address</strong></label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter wallet or account address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <small>Enter the address for your selected payment method</small>
        </div>

        <div className="form-group">
          <label><strong>Payment Method</strong></label>
          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Binance">Binance</option>
            <option value="PayPal">PayPal</option>
            <option value="Skrill">Skrill</option>
            <option value="Neteller">Neteller</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;