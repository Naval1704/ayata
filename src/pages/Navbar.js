import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navBar'>
      <div className="logo">
        <Link className="logo" to="#" onClick={closeMenu}>
           <h2>Ayata Intelligence</h2>
        </Link>
      </div>
      <div className={`components ${menuOpen ? 'open' : ''}`}>
        <Link className="home" to='#' smooth onClick={closeMenu}>
            Home
        </Link>
        <Link className="services" to="#services" smooth onClick={closeMenu}>
            Services
        </Link>
        <Link className="products" to="#products" smooth onClick={closeMenu}>
            Products
        </Link>
        <Link className="training" to="#training" smooth onClick={closeMenu}>
            Training
        </Link>
        <Link className="achievements" to="#achievements" smooth onClick={closeMenu}>
            Achievements
        </Link>
        <Link className="team" to="#team" smooth onClick={closeMenu}>
            Team
        </Link>
        <Link className="careers" to="#careers" smooth onClick={closeMenu}>
            Career
        </Link>
        <Link className="contacts" to="#contacts" smooth onClick={closeMenu}>
            Contact Us
        </Link>
        <Link className="clients" to="#clients" smooth onClick={closeMenu}>
            Our Clients
        </Link>
      </div>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
