import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="Navbar_logo">
          <img src="/asset/hero_logo.png" alt="" />
        </div>
        <div className="navbar_list">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="service" smooth={true} duration={500}>
                Our Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <div className="navbar_contact">
          <NavLink to="/contact-page">Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
