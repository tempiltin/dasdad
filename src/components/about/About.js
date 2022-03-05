import React from 'react'
import "./About.css"
import ABME from '../../assets/img/man2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
         <div className="about_me-image">
           <img src={ABME} alt="" />
           </div>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className='about_icon'/>
                 <h5>Experience</h5>
                 <small>1+ Years Working</small>
              </article>

              <article className="about_card">
                <FiUsers className='about_icon'/>
                 <h5>Clients</h5>
                 <small>10+ Worldwide</small>
              </article>

              <article className="about_card">
                <VscFolderLibrary className='about_icon'/>
                 <h5>Projects</h5>
                 <small>20+ Complited</small>
              </article>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nemo veritatis similique dolorem consequuntur a ipsam quisquam error accusamus doloremque repellat maxime laborum dolores eligendi quia, repudiandae harum. Alias, voluptas.
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about