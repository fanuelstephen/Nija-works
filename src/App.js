import React, { useState } from "react";

import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Client from "./pages/logo/Client";
import About from "./pages/about/About";
import Service from "./pages/ourService/Service";
import Portfolio from "./pages/project/Portfolio";

function App() {
  const [shownNav, setShownNav] = useState(true);
  const handleClick = () => {
    setShownNav(!shownNav);
  };
  return (
    <div>
      <Header handleClick={handleClick} shownNav={shownNav} />
      <Home handleClick={handleClick} shownNav={shownNav} />
      <Client />
      <About />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;
