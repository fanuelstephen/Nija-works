import React, { useState } from "react";

import Header from "./pages/header/Header";
import Home from "./pages/home/Home";

function App() {
  const [shownNav, setShownNav] = useState("");
  const handleClick = () => {
    setShownNav(!shownNav);
  };
  return (
    <div>
      <Header handleClick={handleClick} shownNav={shownNav} />
      <Home handleClick={handleClick} shownNav={shownNav} />
    </div>
  );
}

export default App;
