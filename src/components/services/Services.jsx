import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>Services</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Design and Consultation services.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Web app and Software Development and Consultation services.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Mentorship services.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
