import React from 'react';
import './aboutme.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const AboutMe = () => {
  return (
    <div>
    <section id='aboutMe'>
        <div className='aboutMeTitle'>About Me</div>
          <div className='aboutMeText'>
            <p>I am a Software Engineer with a background in MERN Full-Stack web development. I am a recent graduate of the University of Central Florida Coding Bootcamp. I have experience with HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, React.js, and more. I am a creative problem solver who is passionate about learning new technologies and creating innovative solutions. I am a strong believer in the power of teamwork and collaboration. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
            <p>When I am not coding, I enjoy hiking, fitness, yoga, music, traveling, and exploring new ideas.</p>
          </div>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={UIDesign} alt='UI design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>UI Design</h2>
                <p>As a skilled UI designer, I excel in creating visually stunning and user-friendly interfaces. Proficient in cutting-edge design tools, I'm committed to continuous learning, staying at the forefront of UI design to tackle new challenges and push digital aesthetics boundaries.</p>
          </div>
          </div>
          </div>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={WebDesign} alt='Web Design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>As a web designer, I create visually appealing and functional websites using the latest design tools, staying ahead of trends to meet evolving user expectations.</p>
          </div>
          </div>
          </div>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={AppDesign} alt='App Design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>App Design</h2>
                <p>As an app designer, with a passion for crafting visually stunning, user-centric applications. Proficient in cutting-edge design tools, I bring creativity and functionality to every project.</p>
          </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default AboutMe;