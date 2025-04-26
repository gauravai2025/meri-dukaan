import React, { useState } from 'react';
import './styles/SubscriptionPage.css';

const SubscriptionPage = () => {
  const [plan, setPlan] = useState('daily');
  const [quantity, setQuantity] = useState(1);
  const [time, setTime] = useState('morning');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed to ${plan} plan with ${quantity}L in the ${time}`);
    // Here, you can send data to backend
  };

  return (
    <div className="subscription-container">
      <h2 className="title">Subscribe to Milk Delivery</h2>
      <form className="subscription-form" onSubmit={handleSubmit}>
        
        <label>Choose Plan:</label>
        <select value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <label>Quantity (in Liters):</label>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />

        <label>Preferred Delivery Time:</label>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="morning">Morning (6 AM - 9 AM)</option>
          <option value="evening">Evening (5 PM - 8 PM)</option>
        </select>

        <button type="submit">Subscribe Now</button>
      </form>
    </div>
  );
};

export default SubscriptionPage;
