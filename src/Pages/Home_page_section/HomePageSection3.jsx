import React from 'react'
import './HomePageSection3.css';
import ambulance from '../images/ambulance (1).png';
import healthCare from '../images/healthcare.png';
import homeService from '../images/basic-needs.png';
function HomePageSection3() {
  return (
    <div className='cards_section'>
         <h1 className='cards_head'>Why People Trust Familycare</h1>
         <div className='cards_ctn'>
                <div className='card1'>
                    <div className='card_logo'>
                      <img src={ambulance} alt="" className='card_image'/>
                      </div>
                    <div className='card_info'>
                    <h3 className='card-head'>Emergency Service</h3>
                    <p className='card-para'>Our clinic provide emergency service for emergency cases. +002 3333 6666</p>
                    </div>
                </div>

                <div className='card2'>
                    <div className='card_logo'><img src={homeService} alt="" className='card_image'/></div>
                    <div className='card_info'>
                    <h3 className='card-head'>Home Health Service</h3>
                    <p className='card-para'>Since customer comfort and convenince are of a high priority to us we offer home health service.</p>
                    </div>
                </div>

                <div className='card3'>
                    <div className='card_logo'><img src={healthCare} alt="" className='card_image'/></div>
                    <div className='card_info'>
                    <h3 className='card-head'>Family Physicin</h3>
                    <p className='card-para'>Dr. Aditya Varma has an experience family physician to consult and treat all of your aliments with great care.</p>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default HomePageSection3;