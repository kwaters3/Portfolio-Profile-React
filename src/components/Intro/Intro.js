import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Katie Waters</span> <br/> Full Stack Web Developer</span>
        <p className="introPara">I am a full stack web developer with a passion for creating aesthetic, responsive, and user-friendly websites.  </p>
      </div>
      <img src={bg} alt="profile image" className="bg"/>
    </section>
  );
};

export default Intro;
