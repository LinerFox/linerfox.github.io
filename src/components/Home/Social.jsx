import React from "react";

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.linkedin.com/in/joseph-chu-developer'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-linkedin-alt'></i>
      </a>
      {/* <a
        href='https://www.dribbble.com'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-dribbble'></i>
      </a> */}
      <a
        href='https://github.com/LinerFox'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-github-alt'></i>
      </a>
    </div>
  );
};

export default Social;
