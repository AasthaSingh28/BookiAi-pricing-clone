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
      document.getElementById("#overview").body.backgroundColor = "#1e293b";
      document.getElementById("#authentication").body.backgroundColor =
        "#1e293b";
      document.getElementById("#endpoints").body.backgroundColor = "#1e293b";
      document.getElementById("#code-example").body.backgroundColor = "#1e293b";
      document.getElementById("#tutorial").body.backgroundColor = "#1e293b";
      document.getElementById("#pricing").body.backgroundColor = "#1e293b";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(31 41 55)";
      document.getElementById("#overview").body.backgroundColor = "white";
      document.getElementById("#authentication").body.backgroundColor = "white";
      document.getElementById("#endpoints").body.backgroundColor = "white";
      document.getElementById("#code-example").body.backgroundColor = "white";
      document.getElementById("#tutorial").body.backgroundColor = "white";
      document.getElementById("#pricing").body.backgroundColor = "white";
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
