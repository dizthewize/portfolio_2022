import React from 'react'
import './about.css'
import ME from '../../assets/remote_work_male.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            For almost 5 years I have been working in software engineering obtaining various roles and contributing to a multitude of projects. I specialize in consumer-facing applications and enjoy focusing my career on building maintainable, scalable systems in which the UI communicates with the data model. My wide ranged knowledge and skill set is focused on full stack development including highly used tools in development such as docker and kubernetes for scalability and infrastructure setup.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
