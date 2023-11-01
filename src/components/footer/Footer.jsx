import React from 'react';
import {Link} from "react-router-dom";
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='footer'>  

      <section className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a> 
        <FaPhone className="phone-icon" />
          <p className="tel">0033-6-34-40-43-48</p>
      </section>

        <section className='link'>
             <ul>
            <li>
              <Link to="/acceuil">Acceuil</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/competences">Competences</Link>
            </li>
            <li>
              <Link to="/projets">Projets</Link>
            </li>
          </ul>
           </section>
          <p> All right reserved RIAD Reda Fethi ©2023 </p>
       
        </section>
    );
}

export default Footer;
