import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Element, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Element name="navbar">
      <nav className="navbar">
        <img src={logo} alt="logo" className="logoNav" />
        <div className="desktopMenu">
          <ScrollLink className="navbarLinks"  to="intro" offset={-50} smooth={true} duration={500} onClick={scrollToTop}>
            Home
          </ScrollLink>
          <ScrollLink className="navbarLinks" to="aboutMe" offset={50} smooth={true} duration={500}>
            About Me
          </ScrollLink>
          <ScrollLink className="navbarLinks" to="portfolio" offset={75} smooth={true} duration={500}>
            Portfolio
          </ScrollLink>
        </div>
        <button className="contactMeBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior: 'smooth', offset: 50});
      }}>
          <img src={contactImg} alt="contact image" className="contactMeImg" /> Contact Me
        </button>
      </nav>
    </Element>
  );
};

export default Navbar;









