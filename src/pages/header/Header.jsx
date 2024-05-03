import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function Header({ shownNav, handleClick }) {
  return (
    <div className={`header ${shownNav ? "show" : "hide"}`}>
      <div className={`header_nav`}>
        <div className="logo">
          <img src="/asset/nav_logo.png" alt="logo" />
          <div>
            <HiMenuAlt3 className="icon" onClick={handleClick} />
          </div>
        </div>
        <div className="header_list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#service">Our Services</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
          </ul>
        </div>
        <div className="header_contact">
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;