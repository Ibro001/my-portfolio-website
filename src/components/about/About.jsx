import React from 'react'
import './about.css'
import ME from '../../assets/ME3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hello i am a fullstack software engineer who love to build
            user-friendly, beautiful React.js and Node.js applications and
            contributing to open source projects.
            
            I enjoy collaborating with and mentoring other fellow developers.

            My background and degree is in Physics and Education, so i specialize
            in logical and empathetic problem solving, i am a polymath,
            which means i am always eager to learn and adapt easily to new situations
            and technologies.

            I would love to connect with you, so feel free to reach out! 
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
