import React from 'react'
import './ServicePage.css';
import ambulance from '../images/medical.png';
import bloodbank from '../images/blood-bag.png';
import xRay from '../images/x-rays.png';
import lab from '../images/test.png';
import pulseMonitor from '../images/pulse.png';
import checkUp from '../images/examination.png';
function ServicePage() {
  return (
    <div>
        <div className='service-section'>
                <h1>FAMILYCARE Medical Services
                <hr />
                </h1>
               
        </div>
        <div className='card-section'>
            <div className='card_ctn1'>
                <div className='service_card'>
                    <div className='serviceCard_logo'>
                        <img src={pulseMonitor} alt="" />
                    </div>
                    <div>
                        <h1>Health CheckUp</h1>
                        <p>A usual full-body health check-up is made up of blood and urine tests lungs function tests, and cardiac test.</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>
            
                <div className='service_card'>
                    <div className='serviceCard_logo'>
                        <img src={xRay} alt="" />
                    </div>
                    <div>
                        <h1>X-Ray</h1>
                        <p>An X-ray is an imaginaring test that produces pictures of the organs, tissues, and bones of the body.</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>

                <div className='service_card'>

                    <div className='serviceCard_logo'>
                        <img src={bloodbank} alt="" />
                    </div>
                    <div>
                        <h1>Blood Bank</h1>
                        <p>Blood banking is the process that takes place in the lab to make sure that donated blood, or blood products.</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>
            </div>

            <div className='card_ctn1'>
                <div className='service_card'>
                    <div className='serviceCard_logo'>
                        <img src={lab} alt="" />
                    </div>
                    <div>
                        <h1>Laboratory</h1>
                        <p>Clinical lab services are tests on specimens from the body that are used to diagnose and treat patients.</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>
            
                <div className='service_card'>
                    <div className='serviceCard_logo'>
                        <img src={checkUp} alt="" />
                    </div>
                    <div>
                        <h1>Outdoor Checkup</h1>
                        <p>Clinics / Hospitals of Outdoor Checkup Services, Emergency Care Service, Postoperative Care Service</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>

                <div className='service_card'>
                    <div className='serviceCard_logo'>
                        <img src={ambulance} alt="" />
                    </div>
                    <div>
                        <h1>Ambulance</h1>
                        <p>Emergency ambulance services have dedicated staff to handle medical conditions at any time anywhere.</p>
                    </div>
                    <button className='service_btn'>
                        Book an Appointment
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicePage;