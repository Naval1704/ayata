import React from 'react';
import '../pages/Carrer.css';

function Career() {
  return (
    <div id='careers' className="career-container">
      <h2 className='career-container-heading'>Want To Join Us?</h2>
      <div className="career-box">
        <div className="about-us-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="career-heading">
          <h1>Join Our Team</h1>
          <p>Explore exciting career opportunities with us.</p>
        </div>
        <button className="apply-button">Explore</button>
      </div>
      <img className="wave-image" src="/wave.svg" alt="Wave" />
    </div>
  );
}

export default Career;
