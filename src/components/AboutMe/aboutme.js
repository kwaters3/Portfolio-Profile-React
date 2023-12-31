import React from 'react';
import './AboutMe.css';
import FullStack from '../../assets/fullstack.png';
import FrontEnd from '../../assets/frontend.png';
import BackEnd from '../../assets/backend.png';


const About = () => {
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
              <img src={FullStack} alt='UI design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>UI/UX</h2>
                <p>As a skilled UI designer, I excel in creating visually stunning and user-friendly interfaces. Proficient in cutting-edge design tools, I'm committed to continuous learning, staying at the forefront of UI design to tackle new challenges and push digital aesthetics boundaries.</p>
          </div>
          </div>
          </div>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={FrontEnd} alt='Web Design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>Web & App</h2>
                <p>As a web and app designer, I create visually appealing and functional websites and applications using the latest design tools, staying ahead of trends to meet evolving user expectations.</p>
          </div>
          </div>
          </div>
          <div className='skillBars'>
            <div className='skillBar'>
              <img src={BackEnd} alt='App Design' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>Full-Stack</h2>
                <p> Full Stack MERN Developer specializing in end-to-end web solutions. My expertise includes MongoDB, Express.js, React.js, and Node.js, and I thrive in collaborative, cross-functional environments. Committed to staying ahead, I'm gearing up with skills in AWS, Azure, Docker, Kubernetes, and serverless architectures. Let's create the future of web development together, blending innovation with user-centric design.</p>
          </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default About;