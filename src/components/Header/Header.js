import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logoHeader" />
      {/* <div className="headerTitles">
        <span className="headerTitle1">Welcome to</span>
        <span className="headerTitle2">My Portfolio</span>
      </div> */}
    </header>

  );

};

export default Header;