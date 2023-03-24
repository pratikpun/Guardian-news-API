import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-title">
        GUARDIAN NEWS
      </NavLink>
    </div>
  );
};

export default Header;
