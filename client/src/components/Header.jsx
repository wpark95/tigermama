import React from 'react';
import {
  NavLink,
  Link
} from 'react-router-dom';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify-icons/simple-icons/instagram';

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
            <Icon icon={instagramIcon} />
          </Link>
        </li>
      </ul>
    </nav>
    </div>

  </div>
);

export default header;
