import React from "react";
import "./Footer.css";
import { GrYoutube } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            Ayata Intelligence strives to create products and services that
            create a positive impact by leveraging the benefits of Artificial
            Intelligence, computer vision, and Machine learning.
          </p>
        </div>
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <GrYoutube />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
