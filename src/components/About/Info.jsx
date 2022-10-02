import React from "react";

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-briefcase-alt'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>4 Months Working</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-award'></i>
        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>20 Projects</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-support'></i>
        <h3 className='about__title'>Uptime</h3>
        <span className='about__subtitle'>15hrs</span>
      </div>
    </div>
  );
};

export default Info;
