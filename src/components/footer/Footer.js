import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#!" className='footer_logo'>TEMPILTIN</a>
      <ul className='permalinks'>
        <li> <a href="# "> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience "> Experience </a></li>
        <li> <a href="#services "> Services </a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#testimonials "> Testimonials </a></li>
        <li> <a href="#contact"> Contact </a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>
      <div className="footer_copyright">
         <small>&copy; Temurbek Shukurov Web site. Uzbekistan 2022</small>
      </div>
    </footer>
  )
}

export default Footer