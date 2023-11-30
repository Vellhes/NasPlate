import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleNavbar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Logo</a>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
 );
}

export default Navbar;