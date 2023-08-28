import React, { useState } from 'react';
import "./Dum.css"

const Header66 = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="header-area">
      <div className="header-container">
        <div className="site-logo">
          <a href="#">Freelancer</a>
        </div>
        <div className="mobile-nav" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={`site-nav-menu ${mobileMenuActive ? 'mobile-menu' : ''}`}>
          <ul className="primary-menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header66;
