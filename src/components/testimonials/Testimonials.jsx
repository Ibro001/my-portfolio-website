import React from 'react'
import './testimonials.css'
import { testimonialDB } from '../../DB/testimonialDB'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonialDB.map((testimonials) => {
            const { id, image, name, review } = testimonials;
            return (
              <SwiperSlide key = {id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="avatar_image" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
