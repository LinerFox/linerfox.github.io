import "./Contact.css";

import React from "react";

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk To Me</h3>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>karkinoscode@gmail.com</span>
              <a
                href='mailto:karkinoscode@gmail.com'
                rel='noreferrer'
                className='contact__button'
              >
                Write Me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-linkedin-square contact__card-icon'></i>
              <h3 className='contact__card-title'>LinkedIn</h3>
              <span className='contact__card-data'>Visit my profile</span>
              <a
                href='https://www.linkedin.com/in/joseph-chu-developer'
                rel='noreferrer'
                target='_blank'
                className='contact__button'
              >
                Write Me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>

            {/* <div className='contact__card'>
              <i className='bx bx contact__card-icon'></i>
              <h3 className='contact__card-title'></h3>
              <span className='contact__card-data'></span>
              <a href='' className='contact__button'>
                Write Me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
