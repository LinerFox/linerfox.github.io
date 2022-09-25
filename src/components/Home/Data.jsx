import React from "react";

const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>Joe</h1>
      <h3 className='home__subtitle'>Web Developer | Artist</h3>
      <p className='home__description'>
        I am a web developer and 3D artist located in Florida. I&apos;m very
        passionate about and dedicated to my work.
      </p>
      <a href='#contact' className='button button--flex'>
        Say Hello
        <i class='uil uil-message'></i>
      </a>
    </div>
  );
};

export default Data;
