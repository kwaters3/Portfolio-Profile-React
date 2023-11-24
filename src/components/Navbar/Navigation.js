import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logoNav" />
      <div className="desktopMenu">
        <Link className="navbarLinks">Home</Link>
        <Link className="navbarLinks">About Me</Link>
        <Link className="navbarLinks">Portfolio</Link>
        {/* <Link className="navbarLinks">Resume</Link> */}
      </div>
      <button className="contactMeBtn">
        <img src={contactImg} alt="contact image" className="contactMeImg" />{" "}
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
