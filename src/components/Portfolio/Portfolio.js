import React from 'react';
import './Portfolio.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='pTitle'>My Projects</h2>
      <span className='worksSubTitle'>I invite you to explore my portfolio of projects and work, where you can freely browse and enjoy a curated collection showcasing my creative and professional endeavors.</span>
      <div className='worksImgs'>
        <img src={Portfolio1} alt='project 1' className='worksImg' />
        <img src={Portfolio2} alt='project 2' className='worksImg' />
        <img src={Portfolio3} alt='project 3' className='worksImg' />
        <img src={Portfolio4} alt='project 4' className='worksImg' />
      </div>
      </section>
  );
}

export default Portfolio;