import React from "react";
import "../pages/Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <FaInstagram className="social-icons" />

            <FaXTwitter className="social-icons" />

            <IoLogoLinkedin className="social-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
