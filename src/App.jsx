import Navbar from "./components/Navbar";
import React from "react";
import { useState } from "react";
import Overview from "./components/Overview";
import Authentication from "./components/Authentication";
import Endpoint from "./components/Endpoint";
import Tutorial from "./components/Tutorial";
import Pricing from "./components/Pricing";
import CodeExample from "./components/CodeExample";

function App() {
  const [mode, setMode] = useState("light"); //dark mode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(31 41 55)";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Overview />
      <Authentication />
      <Endpoint />
      <Tutorial />

      <Pricing />
    </>
  );
}

export default App;
