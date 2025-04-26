import React from "react";
import "../styles/OurPartners.css"; // Import the CSS file

const OurPartners = () => {
  return (
    <div className="partners-container">
      <h2>Our Partners</h2>
      <p>We collaborate with dedicated farmers and trusted suppliers to deliver fresh, high-quality dairy products.</p>

      <div className="partners-grid">
        {/* Farmer Section */}
        <div className="partner-card">
          <img src="/farmer.jpg" alt="Farmer"/>
          <h3>Farm Fresh Dairy</h3>
          <p>Providing organic and fresh milk straight from farms.</p>
        </div>

        {/* Supplier Section */}
        <div className="partner-card">
          <img src="/supplier.jpg" alt="Supplier" />
          <h3>Reliable Suppliers</h3>
          <p>Ensuring quality packaging and timely delivery.</p>
        </div>

        {/* Distributor Section (Optional) */}
        <div className="partner-card">
          <img src="/distributor.jpg" alt="Distributor" />
          <h3>Efficient Distribution</h3>
          <p>Seamlessly managing logistics from farm to home.</p>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
