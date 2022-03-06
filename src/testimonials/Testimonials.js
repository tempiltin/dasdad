import React from 'react'
import "./testimonials.css"
import AVTR1 from '../assets/img/man2.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
  avatar:AVTR1,
  name:'Client Name 1',
  review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?'
  },
  {
  avatar:AVTR1,
  name:'Client Name 2',
  review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?'
  },
  {
  avatar:AVTR1,
  name:'Client Name 3',
  review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?'
  },
  {
  avatar:AVTR1,
  name:'Client Name 4',
  review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?'
  },
  {
  avatar:AVTR1,
  name:'Client Name 5',
  review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review feom clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container" modules={[ Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review} , index) =>{
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
               <img src={avatar} alt="_securety" />
               
              </div>
              <h5 className='client_name'>{name}</h5>
               <small className='_review'>
                {review}
               </small>
            </SwiperSlide>
         
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials