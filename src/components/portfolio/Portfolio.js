import React from 'react'
import "./portfolio.css"
import IMG from '../../assets/img/man4.jpg'
const data = [
  {
    id: 1,
    image: IMG,
    title: 'tempiltin web site 1',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
  {
    id: 2,
    image: IMG,
    title: 'tempiltin web site 2',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
  {
    id: 3,
    image: IMG,
    title: 'tempiltin web site 3',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
  {
    id: 4,
    image: IMG,
    title: 'tempiltin web site 4',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
  {
    id: 5,
    image: IMG,
    title: 'tempiltin web site 5',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
  {
    id: 6,
    image: IMG,
    title: 'tempiltin web site 6',
    github: 'https://github.com',
    demo: 'https://tempiltin-click-clon.netlify.app/'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank '>Git hub</a>
                  <a href={demo} className='btn btn-primary' target='_blank '>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio