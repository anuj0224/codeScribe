import React, { useContext } from "react";
import headerImg from "../assets/favi-removebg-preview.png";
import { NavLink } from "react-router-dom";

import { UsedContext } from "./App";

function Header() {
  const { state, dispatch } = useContext(UsedContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink>
            <button className="Headerbtn Headerbtn2 btn">Anuj Mourya</button>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink>
            <button className="Headerbtn Headerbtn1 btn">Anuj Mourya</button>
          </NavLink>
        </>
      );
    }
  };

  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img className="headerlogo" src={headerImg} alt="MainLogo" />
        <NavLink className="headerp" to="/">
          Codo Scribe
        </NavLink>
      </div>
      <div className="Headerbtngroup">
        <RenderMenu />
      </div>
    </div>
  );
}

export default Header;
