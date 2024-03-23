import React from 'react'
import './ErrorMessage.css'
import { NavLink } from 'react-router-dom'
function ErrorMessage() {
  return (
    <div className='ctn'>
       <div className='error-section'>
        <h2 className='error-h1'>404</h2>
        <h4 className='error-h4'>SORRY! PAGE NOT FOUND</h4>
         <p className='error-para'>Soory, the page you're looking for doesn't exist.If you think<br/> something is broken, report a problem.</p>
             <div className='error-btn-ctn'>
                <NavLink to="/" className="return-homeBtn"> 
                    RETURN HOME
                </NavLink>
                <NavLink to="/contactus" className="return-homeBtn"> 
                    REPORT PROBLEM
                </NavLink>
            </div>
       </div>
    </div>
  )
}

export default ErrorMessage