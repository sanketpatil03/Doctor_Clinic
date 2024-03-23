import React from 'react'
import "./HomePageSection2.css"
import aboutUsImage from '../images/WhatsApp Image 2023-06-13 at 12.41.04 AM.jpeg'
function HomePageSection2() {
  return (
    <div className='aboutUS_section'>
        <div className='aboutus_responsivehead'>
        <h1 className='aboutUs_head3'>About Us</h1>
            <hr></hr>
        </div>
         
        <div className='aboutUs_ctn'>
            <div className='aboutUS_Image_section'>
                <img src={aboutUsImage} alt="aboutusimage" className='aboutUs_image'/>
            </div>
            <div className='aboutUs_Info'>
            <h1 className='aboutUs_head1'>About Us</h1>
            <hr></hr>
             <h6 className='aboutUs_head2'>I'm Dr. Aditya Varma(M.B.B.S)</h6>
             <p style={{margin:"0px"}} className='aboutus_para'>Family Physician</p>
             <p className='aboutus_para'>Dr. Aditya Singhania has completed his M.B.B.S in Cambridge University. He has 5 years experience,for long period of time Dr. Aditya Singhania has provide high-quality care for more than thousands of patient.           
            We provide trustworthy and affordable healthcare for you and your family in your neighbourhood! </p>
             <p className='aboutus_para'>We are committed to help you understand your body better and to empower you to make better decisions in regards to your health.</p>
        </div>
    </div>
   </div> 
  )
}

export default HomePageSection2;