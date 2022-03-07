import React from 'react';
import "./Contact.css";
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dwz1ikf', 'template_4hd8cvj', form.current, 'cXXCdmgCA4k5Gj-6Q')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="mycontainer">
            <article className="contact_option">
              <HiOutlineMail className='contact_option-icon' />
              <h4>Email</h4>
              <h5>@gmail.com</h5>
              <a href="mailto:temurbekshukurov0707@gmail.com" target='_blank '>Send a message </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className='contact_option-icon' />
              <h4>Messenger</h4>
              <h5>egatutorials</h5>
              <a href="https://m.me/TemurbekShukurov0707" target='_blank '>Send a message </a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className='contact_option-icon' />
              <h4>WhatsApp</h4>
              <h5>+12345679</h5>
              <a href="https://api.whatsapp.com/send?phone+998337074105" target='_blank '>Send a message </a>
            </article>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mycontainer1">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact