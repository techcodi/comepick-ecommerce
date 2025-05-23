import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Tech tips and guides blog</h2>
        <div className="footer-section1">
          <div className="footer-subsection">
            <img src="/footer-img-1.png" alt="footer-img1" />
            <h4 className="footer-minititle">
              Explore lightweight tech for effortless travel
            </h4>
            <p className="footer-text">
              From portable power to compact gadgets, discover the best tech to
              make your travels smoother and more convenient.
            </p>
          </div>

          <div className="footer-subsection">
            <img src="/footer-img2.png" alt="footer-img1" />
            <h4 className="footer-minititle">
              Smart tech for lighting, security, & climate
            </h4>
            <p className="footer-text">
              Easily control lighting, security, and climate with smart devices
              that simplify your home's atmosphere.
            </p>
          </div>

          <div className="footer-subsection">
            <img src="/footer-img3.png" alt="footer-img1" />
            <p className="footer-text">
              Get quality used mobile phones at unbeatable prices, with top
              brands and reliable performance.
            </p>
          </div>
        </div>

        <div className="footer-section2">
          <div className="footer-section">
            <h3 className="footer-subtitle">E-commerce support</h3>
            <div className="footer-contact">
              <p className="footer-brand">COMEPICK</p>
              <p className="footer-contact-item">TEL: +7 0 2 8 1 2 3</p>
              <p className="footer-contact-item">Email: eecotrick.com</p>
              <p className="footer-contact-item">Phone: +47 20 123 4507</p>
              <p className="footer-contact-item">Email: export@eecotrick.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Working hours</h3>
            <ul className="footer-list">
              <li>Monday to Friday (9:00 - 18:30)</li>
              <li>Saturday: 10:00 - 14:00</li>
              <li>Sunday: 15:00 - 16:00</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">About us</h3>
            <ul className="footer-list">
              <li>Series</li>
              <li>Corporate website</li>
              <li>Exclusive Office</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Help & Support</h3>
            <ul className="footer-list">
              <li>Help center</li>
              <li>Payments</li>
              <li>Product income</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">
            Sign up for exclusive offers and free latest news!
          </h3>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Your email..."
              className="footer-input"
            />
            <button className="footer-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 COMEPICK. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Please guide
          </a>
          <a href="#" className="footer-link">
            Create settings
          </a>
          <a href="#" className="footer-link">
            Yours and conditions
          </a>
          <a href="#" className="footer-link">
            Inputs
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
