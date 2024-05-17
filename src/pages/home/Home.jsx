import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Navbar from "./Navbar";
import Header from "../header/Header";

function Home({ showNav, toggleNav }) {
  return (
    <div>
      <Header showNav={showNav} toggleNav={toggleNav} />
      <div name="home" className="hero_section">
        <div className="hero_header">
          <img src="/asset/hero_logo.png" alt="" />
          <HiMenuAlt3 className="icon" onClick={toggleNav} />
          <Navbar />
        </div>
        <div className="hero_content">
          <div className="hero_heading">
            <span className="hero_heading--tag">We Are Here To Help You</span>
            <span className="hero_heading--text">Visualize</span>
            <div className="hero_heading--img">
              <img src="/asset/hero.png" alt="phot" />
              <div className="hero_heading--text">Your</div>
            </div>
            <span className="hero_heading--text">Big Idea</span>
          </div>
          <div className="hero_description">
            <p className="hero_description-text">
              Here in Nija, we help you craft your Big Idea with support from
              our amazing team.
              <span className="hero_description-bold">
                Whether it is UI/UX Design, Development, and Illustrations
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
