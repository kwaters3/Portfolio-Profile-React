import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logoHeader" />
    
    </header>

  );

};

export default Header;