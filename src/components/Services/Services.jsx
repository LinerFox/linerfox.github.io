import "./Services.css";

import React, { useState } from "react";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I Bring To The Table</span>
      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>ReactJS Developer</h3>
            <span className='services__button' onClick={() => toggleTab(1)}>
              View More{" "}
              <i className='uil uil-arrow-right services__button-icon'></i>{" "}
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className='services__modal-content'>
                <i
                  onClick={() => toggleTab(0)}
                  className='uil uil-times services__modal-close'
                ></i>
                <h3 className='services__modal-title'>ReactJS Developer</h3>
                <p className='services__modal-description'>
                  Service with over 3 years of knowledge applied.
                </p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Currently Develop with ReactJS 18
                    </p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      I use a from scratch approach
                    </p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Components are Microserviced
                    </p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Deployment on Netlify, AWS, Heroku.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>Frontend Developer</h3>
            <span onClick={() => toggleTab(2)} className='services__button'>
              View More{" "}
              <i className='uil uil-arrow-right services__button-icon'></i>{" "}
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className='services__modal-content'>
                <i
                  onClick={() => toggleTab(0)}
                  className='uil uil-times services__modal-close'
                ></i>
                <h3 className='services__modal-title'>Frontend Developer</h3>
                <p className='services__modal-description'>
                  Service with over 3 years of knowledge and experience applied.
                </p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Developed with 'Mobile First Approach'
                    </p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Web Page Development utilizing HTML, CSS3, Javascript.
                    </p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Latest standards are used: WCAG, SCSS, and Babel to create
                      error free code.
                    </p>
                  </li>

                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Figma is used to create Mockups and Design Deliverables.
                      Icons are carefully created by hand in Illustrator.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
