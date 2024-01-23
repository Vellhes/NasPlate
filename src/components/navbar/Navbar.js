import React, { useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleNavbar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-logo">
              <img src="./../img/nasplate.png" alt="logo NasPlate">
              </img>
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/" className="navbar-logo">Home</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/" className="navbar-logo">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-logo">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-logo">Contact</Link>
          </li>
        </ul>
        <div className="navbar">
          <div className="navbar-container">
            <li className="navbar-item">
              <Link to="/login" className="navbar-logo">Connexion</Link>
            </li>
            <li className="navbar-item">
              <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
 );
}

export default Navbar;