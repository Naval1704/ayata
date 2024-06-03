import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="blur-background"></div> {/* Transparent background overlay */}
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Your full name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email address" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your phone number" />
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <textarea className='textarea-group' placeholder="Your message..." rows="6"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
