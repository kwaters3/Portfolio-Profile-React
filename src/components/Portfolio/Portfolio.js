import React from 'react';
import './Portfolio.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import GitHub from '../../assets/github.png';
import BlogLogo from '../../assets/bloglogo.png';
import HappyCow from '../../assets/happy-cow.png';
import Job from '../../assets/job.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='pTitle'>My Projects</h2>
      <span className='worksSubTitle'>I invite you to explore my portfolio of projects and work, where you can freely browse and enjoy a curated collection showcasing my creative and professional endeavors.</span>
      <div className='worksImgs'>
        
      <div className='port1'>
  <a href="https://github.com/MadeleineA42/moody" target="_blank" rel="noopener noreferrer">
    <img src={GitHub} alt="github icon" className="githubIcon" />
  </a>
  <a href="https://madeleinea42.github.io/moody/" target="_blank" rel="noopener noreferrer">
    <img src={HappyCow} alt="github icon" className="happyCow" />
  </a>
  <img src={Portfolio1} alt='project 1' className='worksImg' />
</div>


<div className='port1'>
<a href="https://github.com/newprice247/F2F-Blog" target="_blank" rel="noopener noreferrer">
    <img src={GitHub} alt="github icon" className="githubIcon" />
  </a>
  <a href="https://f2f-blog-ad8f414d0b59.herokuapp.com/" target="_blank" rel="noopener noreferrer">
    <img src={BlogLogo} alt="github icon" className="bloglogo" />
  </a>
  <img src={Portfolio2} alt='project 1' className='worksImg' />
</div>

<div className='port1'>
  <a href="https://github.com/newprice247/Jobfinder" target="_blank" rel="noopener noreferrer">
    <img src={GitHub} alt="github icon" className="githubIcon" />
  </a>
  <a href="https://project3mernstack-c25ab63e2028.herokuapp.com/" target="_blank" rel="noopener noreferrer">
    <img src={Job} alt="github icon" className="jobIcon" />
  </a>
  <img src={Portfolio3} alt='project 1' className='worksImg' />
</div>

<div className='port1'>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={GitHub} alt="github icon" className="githubIcon" />
  </a>
  <a href="" target="_blank" rel="noopener noreferrer">
    <img src={Portfolio4} alt="github icon" className="bloglogo" />
  </a>
  <img src={Portfolio4} alt='project 1' className='worksImg' />
</div>
      </div>
      </section>
  );
}

export default Portfolio;