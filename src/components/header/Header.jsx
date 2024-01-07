import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="burger">
          <div className={`bar bar1 ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar bar2 ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar bar3 ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/acceuil">About</Link>
          </li>
            <li>
            <Link to="/competences">Competences</Link>
          </li>
         
           <li>
            <Link to="/projets">Projets</Link>
          </li> 
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/mescontact">Admin</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
