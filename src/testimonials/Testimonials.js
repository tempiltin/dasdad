import React from 'react'
import "./testimonials.css"
import AVTR1 from '../assets/img/man2.jpg'
const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review feom clients</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials_container">
         <article className="testimonials">
           <div className="client_avatar">
            <img src={AVTR1} alt="_securety" />
            <h5 className='client_name'>Client Name</h5>
            <small className='_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?</small>
           </div>
         </article>
         <article className="testimonials">
           <div className="client_avatar">
            <img src={AVTR1} alt="_securety" />
            <h5 className='client_name'>Client Name</h5>
            <small className='_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?</small>
           </div>
         </article>
         <article className="testimonials">
           <div className="client_avatar">
            <img src={AVTR1} alt="_securety" />
            <h5 className='client_name'>Client Name</h5>
            <small className='_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut consequatur iure similique cumque excepturi libero odio quae quo accusamus, labore maiores. Nobis nulla quam neque obcaecati aut non sit?</small>
           </div>
         </article>
        </div>
    </section>
  )
}

export default Testimonials