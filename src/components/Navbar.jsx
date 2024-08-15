import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="w-full bg-[#6366f1] shadow-md sticky top-0 z-50">
      <h1 className="text-4xl flex p-10 justify-center items-center font-bold text-white">
        Book Generator API
      </h1>

      <div className="bg-[#1e293b] text-slate-400 font-semibold shadow-md">
        <ul className="flex flex-wrap justify-center items-center space-x-6 p-4 md:flex-row flex-col md:space-y-0 space-y-4">
          <li>
            <a href="#overview">OVERVIEW</a>
          </li>
          <li>
            <a href="#authentication">AUTHENTICATION</a>
          </li>
          <li>
            <a href="#endpoints">ENDPOINTS</a>
          </li>
          <li>
            <a href="#tutorial">TUTORIAL</a>
          </li>
          <li>
            <a href="#code-example">CODE EXAMPLE</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <div className="cursor-pointer px-8" onClick={props.toggleMode}>
            <FontAwesomeIcon
              icon={props.mode === "light" ? faMoon : faSun}
              className="text-2xl"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
