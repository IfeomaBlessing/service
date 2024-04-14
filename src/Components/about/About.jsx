import React from 'react'
import "../about/about.css"
import img from '../../assets/AboutImg.jpg'
import Testimonial from './Testimonials'

const About = () => {
  return (
    <div className='about-page section-p' id='About'>
      <h1 className='aboutHeader'>Who We Are</h1>
    <section className="aboutContent">
        <div className="left-about" >
            <p> <strong> Kachupp Global Trend </strong> is a conglomerate Company that has evolved into a choice Real Estate Developing,
              Marketing Company,website and application development,
              Business Development and training with a reputation for integrity, 
              responsibility and excellence in service.</p>
        </div>
        <div className="right-about">

      
          <img src={img} alt="image" className="bigImg"/>

            
        </div>
    </section>

    <section className="testimonial">
    <p>Testimonials</p>
    <h2 className='test-header'>What Our Clients Say</h2>

     <div className="testimonial-container">
     {Testimonial.map((x)=> (                
                    <div className="test-content">
                       <p>{x.text}</p>
                        <h3>{x.name}</h3>
                      </div>
             ))
            }
     </div>
    </section>
    </div>
  )
}

export default About