import "./Home.css";

import Data from "./Data";
import React from "react";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container'>
        <div className='home__content grid'>
          <Social />
          <div className='home__img'></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
