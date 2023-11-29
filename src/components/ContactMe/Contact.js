import React, { useRef, useState } from "react";
import "./Contact.css";
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l5260xf', 'template_jxxip4c', form.current, 'uJLMO1_4Qb8Yd4_Gc')
      .then((result) => {
        console.log(result.text);
        e.target.reset();

        // Scroll to the top after form submission
        window.scrollTo({ top: 200, behavior: 'smooth' });

        // Show the popup
        setShowPopup(true);

        // Hide the popup after a certain delay (e.g., 3000 milliseconds or 3 seconds)
        setTimeout(() => {
          setShowPopup(false);
        }, 2500);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h2 className="cTitle">Contact Me</h2>
      <span className="cSub">Kindly complete the form below to discuss any potential work opportunities.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="names" placeholder="Your Name" name="from_name" />
        <input type="email" className="email" placeholder="Your Email" name="from_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='Send' className="submitbtn">Submit</button>
        <div className="links">
          <img src={FacebookIcon} alt="facebook icon" className="link" />
          <img src={InstagramIcon} alt="instagram icon" className="link" />
          <img src={YoutubeIcon} alt="youtube icon" className="link" />
        </div>
      </form>

      {/* Popup message */}
      {showPopup && (
        <div className="popup">
          <p>Your message has been sent. Thank you!</p>
        </div>
      )}
    </section>
  )
}

export default Contact;
