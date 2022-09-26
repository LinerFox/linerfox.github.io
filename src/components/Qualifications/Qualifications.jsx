import "./Qualifications.css";

import React, { useState } from "react";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualifications section' id='qualifications'>
      <h2 className='section__title'>Qualifications</h2>
      <span className='section__subtitle'>My Personal Journey</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
            Experience
          </div>
        </div>
        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Java Developer</h3>
                <span className='qualification__subtitle'>
                  Woz U | Apprentice Now
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>Mar 2022 - May 2022
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Javascript | Frontend Developer
                </h3>
                <span className='qualification__subtitle'>Generations USA</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>Jan 2022 - Mar 2022
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Fullstack Developer</h3>
                <span className='qualification__subtitle'>
                  Bottega University
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>Dec 2019 - Nov 2020
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>A.S. in AutoCad</h3>
                <span className='qualification__subtitle'>
                  Florida Technical College
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>Jul 2004 - Dec 2005
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Senior Tech Support</h3>
                <span className='qualification__subtitle'>Infosys Limited</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>June 2022 - Present
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Tier 1 Tech Support</h3>
                <span className='qualification__subtitle'>Concentrix</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>May 2020 - June 2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Vue.JS Developer</h3>
                <span className='qualification__subtitle'>Swaggit Inc.</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>Mar 2020 - Apr 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
