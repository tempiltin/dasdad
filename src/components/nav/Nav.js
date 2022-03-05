import React from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt,BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''} href="#header" ><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"  onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#cervices" onClick={()=> setActiveNav('#cervices')} className={activeNav === '#cervices' ? 'active' : ''} ><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav