import "./About.css";

import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/joseph_chu_resume.docx";
import Info from "./Info";
import React from "react";

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>Learn More</span>
      <div className='about__container container grid'>
        <img src={AboutImg} alt='' className='about__img' />

        <div className='about__data'>
          <Info />
          <p className='about__description'>
            As a FrontEnd Developer, I create websites with UI / UX user
            interfaces. I have alot of knowledge across the projects carried
            out.
          </p>
          <a download='' href={CV} className='button button--flex'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
