import React from 'react';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <h1>Gopal Tradres</h1>
      <p>Plumbing and Bathware</p>
    </div>
    <div className="header-right">
      <div className="navigation">
        <ul className="nav-bar">
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </div>

);

export default Header;
