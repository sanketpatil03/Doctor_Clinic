import React from 'react'
import './HomePageSection1.css'
import heroImage from '../images/hero_image2.jpeg'
function HomePageSection1() {
  return (
    <div className='hero_section'>
      <div className='hero_container'>
          <div className='hero_Mesg_Section'>
          <h3 className='heading1'>WELCOME TO FAMILYCARE CLINIC</h3>
          <h1 className='heading2'>Your Health Is <br/>Our Top Priority</h1>
          <p className='hero_para'>Dedicated to patient care and wellness for the entire family.<br/>
            There nothing more important than your good health, cause that's our principle capital asset for your good future.</p>
            <button className='hero_section_btn'>Book an Appointment</button>
          </div>
          <div className='hero_imag_section'>
            <img src={heroImage} alt="hero_image" className='hero_image'/>
          </div>
      </div>
    </div>
  )
}

export default HomePageSection1;