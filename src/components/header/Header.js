import React from 'react';
import "./headre.css";
import CTA from './CTA';
import ME from '../../assets/img/man3.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='header'>
      <div className="container">
        <div className="header_container">
          <h5>Hello ,I'm</h5>
          <h1>Tempiltin</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me"> 
            <img src={ME} alt="" />
          </div>
          <a href="#contact" className='scroll_down'>Scrol Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header