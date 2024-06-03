import React from "react";
import "../pages/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
          Ayata Intelligence strives to create products and services that create a positive impact by leveraging the benefits of Artificial intelligence, computer vision and Machine learning.
          </p>
        </div>
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
