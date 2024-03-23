import React from 'react'
import './AppointmentPage.css';
import appointmentImage from '../images/8431448_3902762__1_-removebg-preview.png';
function AppointmentPage() {
  return (
    <div>
        <div className='Appointment_ctn'>
            <div>
                <img src={appointmentImage} alt="" className='apt_image'/>

            </div>
            <div className='appointmentForm'>
              <h1>Book An Appointment</h1>
                <input type="text" placeholder='Enter Name' className='apt-input-box'/>
                <input type="email" name="" id="" placeholder='Enter Email' className='apt-input-box'/>
                <input type="tel" id=''placeholder='Enter Phone Number' className='apt-input-box'/>
                <input type="number" id='' placeholder='Enter Age' className='apt-input-box'/>
                <input type="date" id='' placeholder='Enter Date' className='apt-input-box'/>
                <input type="time" id='' placeholder='Enter Time' className='apt-input-box'/>
                <textarea name="" id="details-box" placeholder='Type Details' ></textarea>
                <div className='btn_div'>
                <button id='appointmentBtn'>Book Appointment</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AppointmentPage