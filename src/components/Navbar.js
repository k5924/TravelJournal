import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/navbar.css";

export default function Navbar(){
  return(
    <nav>
      <img className="nav--logo" src={logo} alt="globe"/>
      <h2 className="nav--text">my travel journal.</h2>
    </nav>
  );
};
