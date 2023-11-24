import React from "react";
import "./Contact.css";
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="cTitle">Contact Me</h2>
          <span className="cSub">Kindly complete the form below to discuss any potential work opportunities.</span>
          <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" value='Send' className="submitbtn">Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="facebook icon" className="link" />
              <img src={InstagramIcon} alt="instagram icon" className="link" />
              <img src={YoutubeIcon} alt="youtube icon" className="link" />
            </div>
            </form>
    </section>
  )
  }

  export default Contact;