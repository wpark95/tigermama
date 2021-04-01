import React from 'react';
// import axios from 'axios';
import {
  NavLink,
} from 'react-router-dom';

const header = () => (
  <div className="navbar-container">
    <div className="navbar-logo">
        <NavLink to="/">
          <img id="main-logo" src="/main_logo.png" alt="" />
        </NavLink>
    </div>
    <div className="navbar-tabs">
    <nav>
      <ul className="navbar-tabs-list">
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>

  </div>
);

export default header;
