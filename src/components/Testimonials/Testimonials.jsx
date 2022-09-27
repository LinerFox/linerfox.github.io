import "./Testimonials.css";
// IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";

// IMPORT SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from "swiper/react";

import { Data } from "./Data";
// IMPORT REQ. MODULES
import { Pagination } from "swiper";
import React from "react";

const Testimonials = () => {
  return (
    <section className='testimonials section' id='testimonials'>
      <h2 className='section__title'>Testimonials</h2>
      <span className='section__subtitle'>What clients are saying...</span>
      <Swiper
        className='testimonials__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='' className='testimonial__img' />
              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
