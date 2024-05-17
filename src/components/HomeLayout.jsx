import React, { useState } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Service from "../pages/ourService/Service";
import Portfolio from "../pages/project/Portfolio";
import Footer from "../pages/footer/Footer";

function HomeLayout() {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
    console.log("fanuel");
  };
  return (
    <div>
      <Home showNav={showNav} toggleNav={toggleNav} />
      <About />
      <Service />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default HomeLayout;
