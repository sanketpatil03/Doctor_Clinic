import React from 'react'
import './Footer.css';
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from './Pages/images/Untitled_design__1_-removebg-preview.png';
function Footer() {
  return (
   
    <div className='footer_section'>
        <div className='footer_ctn'>
            <div className='footer-part1'>
                <div className='footer-logo'>
                <img src={logo} alt="" id="logo_image" />
                 <h1>FAMILYCARE</h1>
                </div>
                <h6 className='footer-address'> <MdOutlineAddLocationAlt size={25}/>No 19-LG-02, LG Floor, Blok E, Kompleks Komersil Akasa,
                    Jalan Akasa, Akasa Cheras Selatan, 43300, Seri Kembangan, Selangor</h6>
                    <h2 id='working-hour'>Working Hour:</h2>
                    <p>Monday To Sunday</p>
                    <p>AM-8:30 PM</p>
            </div>
            <div id='footer-section2'>
                    <div className='footer-part2'>
                            <ul>
                                <li className='footer-links links-head'><h1>Quick Links</h1></li>
                                <li className='footer-links'>Home</li>
                                <li className='footer-links'>Our Services</li>
                                <li className='footer-links'>Contact Us</li>
                                <li className='footer-links'>Appointment</li>
                            </ul>
                    </div>

                    <div className='footer-part3'>
                        <ul>
                            <li className='footer-links links-head'><h1>Contact Info</h1></li>
                            <li className='footer-links'>
                            <LuPhoneCall /> 0123456789
                            </li>
                            <li className='footer-links'>
                            <MdOutlineAttachEmail /> familycare@gmail.com
                            </li>
                            <li className='footer-links'>
                            Follow us:
                            </li>
                            <FaInstagram size={22} className='footer-icon'/>

                            <FaTwitter size={22} className='footer-icon'/>

                            <FaFacebookSquare size={22} className='footer-icon'/>
                        </ul>
                    </div>

                    <div className='footer-part4'>
                            <ul>
                                <li className='footer-links links-head'><h1>Legal</h1></li>
                                <li className='footer-links'>Term Of Services</li>
                                <li className='footer-links'>Privacy Policy</li>
                                <li className='footer-links'>Cookie Settings</li>
                            
                            </ul>
                    </div>
            </div>
          
        </div>
    </div>
    
     
  )
}




export default Footer;