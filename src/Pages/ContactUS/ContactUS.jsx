import React ,{useState}from 'react'
import './ContactUS.css';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
function ContactUS() {
  const[contact,setContact]=useState({
      username:"",
      email:"",
      phone:"",
      message:""
  })
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setContact({
      ...contact,
      [name]: value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='contact_section'>
        <div className='contactus_header'>
            <h3>Get in touch</h3>

            <div className='getintouch_details'> 
           <h6> <LuPhoneCall />  0123456789</h6>
                <h6> <MdOutlineAddLocationAlt size={25}/> No 19-LG-02, LG Floor, Blok E, Kompleks Komersil Akasa,
                   <br/> Jalan Akasa, Akasa Cheras Selatan, 43300, Seri Kembangan, Selangor</h6>
                <h6>  <MdOutlineAttachEmail /> familycare@gmail.com</h6>    

            </div>
          </div>
            <div className='contactus'>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.458431640999!2d101.74113169315093!3d3.0330732377711422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcbd8a9e51b59%3A0x213800db9ae182de!2sAKASA%20CHERAS%20SOUTH!5e0!3m2!1sen!2sin!4v1686821153367!5m2!1sen!2sin"title='map' className='map'></iframe>
                </div>
                <div className='contactus_form'>
                        <h3>Leave your details here</h3>
                        <p>We will be in touch soon!</p>
                        <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Enter Your Name</label>
                        <input type="text" id="name" name='username' className='inputfield'
                        onChange={handleInput}/>
                        <label htmlFor="email">Enter Your Email</label>
                        <input type="email" id="email" name='email' className='inputfield'
                         onChange={handleInput}/>
                        <label htmlFor="phoneNumber">Contact Number</label>
                        <input type="tel" id='phoneNumber'name='phone'className='inputfield'
                         onChange={handleInput}/>
                        <label htmlFor="message">Your Message</label>
                        <textarea  id="message" name='message' className='textarea'
                         onChange={handleInput}></textarea>
                        <button id='btn' type='submit'>Submit</button>
                        </form>
                        
                </div>
            </div>
        
    </div>
  )
}

export default ContactUS;