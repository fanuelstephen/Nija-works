import React from "react";

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
        <div className="navbar_contact">
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
