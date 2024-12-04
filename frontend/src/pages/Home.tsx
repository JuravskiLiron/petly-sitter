//import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Find the Best Sitter for Your Pet</h1>
        <p>Safe, caring sitters are waiting for your pet</p>
        <Link to="/find-sitters" className="btn-primary">Find a Sitter</Link>
      </div>

      {/* Popular Sitters */}
      <section className="popular-sitters">
        <h2>Popular Sitters</h2>
        <div className="sitters-list">
          {/* Placeholder sitters */}
          <div className="sitter-card">
            <img src="/assets/sitter1.jpg" alt="Sitter 1" />
            <h3>John Doe</h3>
            <p>4.9 stars (120 reviews)</p>
            <Link to="/sitter/1" className="btn-secondary">View Profile</Link>
          </div>
          <div className="sitter-card">
            <img src="/assets/sitter2.jpg" alt="Sitter 2" />
            <h3>Jane Smith</h3>
            <p>4.8 stars (98 reviews)</p>
            <Link to="/sitter/2" className="btn-secondary">View Profile</Link>
          </div>
          {/* Add more sitters here */}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>What Pet Owners Say</h2>
        <div className="reviews-list">
          <div className="review-card">
            <p>"Best service ever! My dog loved it!"</p>
            <h4>– Emily R.</h4>
          </div>
          <div className="review-card">
            <p>"Reliable and friendly sitters. Highly recommend."</p>
            <h4>– Mark L.</h4>
          </div>
          {/* Add more reviews */}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-list">
          <div className="feature-card">
            <i className="fas fa-paw"></i>
            <h3>Experienced Sitters</h3>
            <p>All sitters are verified and experienced in pet care.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Find Local Sitters</h3>
            <p>Search for sitters nearby based on location.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Easy Communication</h3>
            <p>Chat directly with sitters to discuss details.</p>
          </div>
        </div>
      </section>

      {/* Footer with links */}
      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p>© 2024 Petly Sitter. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
