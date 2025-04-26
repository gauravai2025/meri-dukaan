import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/HomePage.css"; // Ensure your CSS handles new classes

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/shop");
  };

  return (
    <div className="container">
      {/* Sticky Navbar */}
      <nav className="navbar sticky">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <h1 className="logo">Meri Dukaan</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About Us</Link>
          <Link to="/partners">Our Partners</Link>
        </div>
        <div className="nav-icons">
          <Link to="/login" title="Login"><i className="fas fa-user"></i></Link>
          <Link to="/cart" title="Cart"><i className="fas fa-shopping-cart"></i></Link>
          <Link to="/profile" title="Profile"><i className="fas fa-user-circle"></i></Link>
        </div>
      </nav>

      {/* Carousel / Banner */}
      <section className="carousel">
        <div className="carousel-slide">
          <p>🎉 10% Off on First Subscription! Use Code: MILK10</p>
        </div>
        <div className="carousel-slide">
          <p>🕒 Daily Morning Deliveries — 6AM to 9AM</p>
        </div>
        {/* Add a slider logic or carousel plugin later */}
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Fresh Milk, Directly from Farmers</h2>
          <p>Connecting farmers with customers for fresh and organic milk delivery at your doorstep.</p>
          <button className="btn" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
        <div className="hero-image-container">
          <img src="/hero-image.png" alt="Milk Delivery" className="hero-image" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            <i className="fas fa-seedling"></i>
            <p>100% Organic & Hormone-Free</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-truck"></i>
            <p>Daily Fresh Delivery</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-handshake"></i>
            <p>Direct from Local Farmers</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Our Best Sellers</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/products/cow-milk.png" alt="Cow Milk" />
            <h3>Fresh Cow Milk</h3>
            <p>₹50/L</p>
            <button>Buy Now</button>
          </div>
          <div className="product-card">
            <img src="/products/buffalo-milk.png" alt="Buffalo Milk" />
            <h3>Buffalo Milk</h3>
            <p>₹60/L</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="review">
          <p>"The freshest milk I’ve ever had! Timely delivery and great service." - Ramesh K.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p className="contact-email">
  <a href="tel:+917480938350">📞 7480938350</a> | 
  <a href="mailto:support@meridukaan.com"> ✉️ support@meridukaan.com</a>
</p>
      </section>

      {/* Extended Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>© 2025 Meri Dukaan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
