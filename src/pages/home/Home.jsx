import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function Home({ shownNav, handleClick }) {
  return (
    <div className="hero_section">
      <div className={`hero_header ${shownNav ? "hide" : "show"}`}>
        <img src="/asset/hero_logo.png" alt="" />
        <HiMenuAlt3 className="icon" onClick={handleClick} />
      </div>
      <div className="hero_content">
        <div className="hero_heading">
          <span className="hero_heading--tag">
            Whethere are here to hel you
          </span>
          <span className="hero_heading--text">Visualize</span>
          <div className="hero_heading--img">
            <img src="/asset/hero.png" alt="phot" />
            <div className="hero_heading--text">your</div>
          </div>
          <span className="hero_heading--text">Big Idea</span>
        </div>
        <div className="hero_description">
          <p className="hero_description-text">
            Here in Nija, we help you craft your Big Idea with support from our
            amazing team.
            <span className="hero_description-bold">
              Whether it is UI/UX Design, Development, and Illustrations
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
