import React from "react";
import Logo from "../../img/logo192.png";
import Reloj from "../Reloj/Reloj";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="div-img">
          <img  src={Logo} width="40" height="40" alt="logo" />
        </div>
        <div className="div-title">
          <h2>ToDo List</h2>
        </div>
        <div className="div-reloj">
          <Reloj />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
