import React, { useState } from 'react'

const Withdraw = ({ userData }) => {
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Binance')
  
  return (
    <div className="container">
      <h2>Nayem Islam</h2>
      <p>Balance: {userData.balance} BANANAS31</p>
      
      <div className="section">
        <h3>Withdraw Funds</h3>
        
        <div className="form-group">
          <label>Amount</label>
          <input 
            type="number" 
            placeholder="Enter amount" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span className="currency">BANANAS31</span>
          <p className="minimum">Minimum: 100 BANANAS31</p>
        </div>
        
        <div className="form-group">
          <label>Withdrawal Address</label>
          <input 
            type="text" 
            placeholder="Enter wallet or account address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="hint">Enter the address for your selected payment method (e.g., wallet address for Binance, email for PayPal)</p>
        </div>
        
        <div className="form-group">
          <label>Payment Method</label>
          <select 
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Binance">Binance</option>
          </select>
        </div>
        
        <button className="cta-button">Withdraw</button>
      </div>
    </div>
  )
}

export default Withdraw