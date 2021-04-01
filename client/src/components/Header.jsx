import React from 'react';
// import axios from 'axios';
import {
  NavLink,
  Link
} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const instagramIcon = <FontAwesomeIcon icon={faInstagram} />

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
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/menu" activeClassName="selected">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/order-online" activeClassName="selected">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">
            Contact Us
          </NavLink>
        </li>
        <li>
          <Link to={{ pathname: "https://www.instagram.com/tigermamaburgers/?igshid=2p0ofgu631ib" }} target="_blank">
            {instagramIcon}
          </Link>
        </li>
      </ul>
    </nav>
    </div>

  </div>
);

export default header;
