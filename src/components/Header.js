import React from 'react';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="logo">
      <h1><a className="main-header" href="index.htm">Gopal Tradres</a></h1>
      <p>Plumbing and Bathware</p>
    </div>
    <div className="header-right">
      <div className="hamburger">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div className="navigation">
        <ul className="nav-bar hidden">
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="search hidden">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </div>

);

export default Header;
