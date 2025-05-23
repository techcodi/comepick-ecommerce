import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // We'll create this CSS file next

function Home() {
  return (
    <div className="pallet-ross">
      <header className="header">
        <div className="logo">
          <span style={{ color: "#0077FF" }}>C</span>OME
          <span style={{ color: "orange" }}>PICK</span>{" "}
        </div>
        <nav className="nav">
          <Link to="auth-sign-up" className="get-started">
            Shop Now
          </Link>
          <div className="nav-links">
            <Link to="auth-sign-up">Shop</Link>
            <Link to="auth-sign-up">Strategy</Link>
            <Link to="auth-sign-up">Pricing</Link>
            <Link to="auth-sign-up">Contact</Link>
            <Link to="auth-sign-up">Solution</Link>
            <Link to="auth-sign-up">E-Commerce</Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1>The World of Online Shopping</h1>

          <p className="description">
            Shop the latest trends with free shipping on orders over $50.
            Discover thousands of handpicked products, easy returns, and 24/7
            customer support—all designed to make your shopping experience
            effortless.
          </p>
          <div className="cta-section">
            <Link to="/auth-sign-up" className="join-button">
              Shop for $0.00/m
            </Link>
            <a href="#readmore" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="art-showcase">
          <img src="./header.png" alt="header image" />
        </div>
      </main>
    </div>
  );
}

export default Home;
