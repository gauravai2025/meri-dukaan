import React from "react";
import "../styles/AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Meri Dukaan</strong>, your trusted source for fresh 
          and organic dairy products, delivered straight from farmers to your doorstep.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h3>Our Story</h3>
        <p>
          Founded in 2024, Meri Dukaan was built on the vision of making farm-fresh dairy 
          products accessible to every household while empowering local farmers.  
          We work directly with farmers, ensuring fair trade and the best quality products 
          for our customers.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section className="team">
        <h3>Meet the Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="/founder.jpg" alt="Founder" />
            <h4>Gaurav Kumar</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/marketing.png" alt="Marketing Head" />
            <h4>Saniya Sagar</h4>
            <p>Marketing Head</p>
          </div>
          <div className="team-member">
            <img src="/operation.png" alt="Operations Manager" />
            <h4>Rishu Kumar</h4>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section className="customer-trust">
        <h3>Trusted by Thousands</h3>
        <p>
          We have delivered over <strong>50,000+ liters</strong> of fresh milk and built 
          a strong community of happy customers. Join us in supporting ethical and 
          sustainable dairy farming.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
