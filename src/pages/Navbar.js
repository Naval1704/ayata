import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// import logo from '../pages/assets/logo.png';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navBar'>
      <div className="logo">
        <Link className="logo" to="#">
           {/* <img src={logo} alt="Ayata Intelligence Logo"></img>  */}
           <h2>Ayata Intelligence</h2>
        </Link>
      </div>
      <div className={`components ${menuOpen ? 'open' : ''}`}>
        <Link className="home" to='#' smooth >
            Home
        </Link>
        <Link className="services" to="#services" smooth >
            Services
        </Link>
        <Link className="products" to="#products" smooth >
            Products
        </Link>
        <Link className="training" to="#training" smooth >
            Training
        </Link>
        <Link className="achievements" to="#achievements" smooth >
            Achievements
        </Link>
        <Link className="team" to="#team" smooth >
            Team
        </Link>
        <Link className="careers" to="#careers" smooth >
            Career
        </Link>
        <Link className="contacts" to="#contacts" smooth >
            Contact Us
        </Link>
        <Link className="clients" to="#clients" smooth >
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
