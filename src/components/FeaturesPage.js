import React from "react";
import "../styles/FeaturesPage.css"; // Import the CSS file

const FeaturesPage = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Why Choose Us?</h2>
      <p className="features-subtitle">
        Experience farm-fresh milk delivered straight to your doorstep with the highest quality standards.
      </p>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-box">
          <img src="/fresh-milk.jpg" alt="Fresh Milk" className="feature-icon" />
          <h3>100% Farm Fresh</h3>
          <p>Sourced directly from farmers with no added preservatives or chemicals.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-box">
          <img src="/delivery.jpg" alt="Delivery" className="feature-icon" />
          <h3>Fast & Reliable Delivery</h3>
          <p>Guaranteed on-time delivery every morning to ensure freshness.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-box">
          <img src="/pricing.png" alt="Affordable Pricing" className="feature-icon" />
          <h3>Affordable Pricing</h3>
          <p>We eliminate middlemen, offering direct farm-to-home pricing.</p>
        </div>

        {/* Feature 4 */}
        <div className="feature-box">
          <img src="/subscription.png" alt="Subscription Plans" className="feature-icon" />
          <h3>Flexible Subscription</h3>
          <p>Choose daily, weekly, or monthly plans with easy modifications.</p>
        </div>

        {/* Feature 5 */}
        <div className="feature-box">
          <img src="/secure-payment.png" alt="Secure Payment" className="feature-icon" />
          <h3>Secure Payments</h3>
          <p>Pay easily via UPI, Cards, Net Banking, or Wallets with full security.</p>
        </div>

        {/* Feature 6 */}
        <div className="feature-box">
          <img src="/quality.jpg" alt="Quality Assurance" className="feature-icon" />
          <h3>Stringent Quality Checks</h3>
          <p>Every batch is tested to ensure it meets purity and hygiene standards.</p>
        </div>

        {/* Feature 7 */}
        <div className="feature-box">
          <img src="/eco.jpg" alt="Eco-Friendly" className="feature-icon" />
          <h3>Eco-Friendly Packaging</h3>
          <p>We use biodegradable and reusable packaging for a greener future.</p>
        </div>

        {/* Feature 8 */}
        <div className="feature-box">
          <img src="/customer-support.jpg" alt="Customer Support" className="feature-icon" />
          <h3>24/7 Customer Support</h3>
          <p>Dedicated customer service to assist with orders and queries.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
