import React from 'react'
import './portfolio.css'
import {portfolioDB} from '../../DB/portfolioDB'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio portfolio__container">
        {
          portfolioDB.map((portfolios) => {
            const {id,image,title,github,demo} = portfolios;
            return (
              <article key= {id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src= {image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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