import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-scroll";

function Header({ showNav, toggleNav }) {
  const handleNavLinkClick = () => {
    toggleNav();
  };
  return (
    <div>
      <div className={`header ${showNav ? "show" : "hide"}`}>
        <div className="header_nav">
          <div className="logo">
            <Link to="/" smooth={true} duration={500}>
              <img src="/asset/nav_logo.png" alt="logo" />
            </Link>
            <div>
              <IoCloseCircleOutline
                className="icon_header"
                onClick={toggleNav}
              />
            </div>
          </div>
          <div className="header_list">
            <ul>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul>
          </div>
          <div className="header_contact">
            {/* You can use NavLink if you want to navigate to a different page */}
            <a href="/contact-page">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
