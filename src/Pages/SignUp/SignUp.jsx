import React from 'react'
import { useState } from 'react';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom'; 
import './SignUp.css';
import { MdAttachEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
function SignUp() {
    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""

    });

    const navigate = useNavigate();

    const {storeTokenInLS} = useAuth();

    const handleRegisterInput=(e)=>{
        let iname=e.target.name;
        let value=e.target.value;
      setUser({
        ...user,
        [iname] :value

      })
    
    };
   const handleSubmit= async (e)=>{
      e.preventDefault();
      console.log(user);
      try {
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
          method:"POST",
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        
        if(response.ok)
        {
          const res_data = await response.json();
          console.log("rse from server",res_data);

          //store token in local host
          storeTokenInLS(res_data.token);

          setUser({ username: "", email: "", phone: "", password: "" });
          navigate("/login");
        }
        console.log(response);
      } catch (error) {
        console.log("register",error);
      }

     
   }
  return (
      <div className='signup-section'>
        <div className='signup-ctn'>
               
        <h1>SIGN UP</h1>
                <form onSubmit={handleSubmit}>
                    

                    <div className='input-box'>
                        <div id='email-icon'>
                        <FaUser style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="text" name="username" placeholder="Username" className='input-filed'
                       value={user.username}
                        onChange={handleRegisterInput}
                        />
                    </div>

                    <div className='input-box'>
                        <div id='email-icon'>
                        <MdAttachEmail style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="email" name="email" size={100} placeholder="Email" className='input-filed' 
                        value={user.email}
                         onChange={handleRegisterInput}/>
                    </div>

                    <div className='input-box'>
                        <div id='email-icon'>
                        < FaPhone style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="tel" name="phone" placeholder="Phone" className='input-filed'
                        value={user.phone}
                         onChange={handleRegisterInput}/>
                    </div>

                    <div className='input-box'>
                        <div id='email-icon'>
                        <FaLock style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="password" name="password"  placeholder="Password" className='input-filed'  
                        value={user.password}
                        onChange={handleRegisterInput}/>
                    </div>
                    <button 
                    id='login-btn' 
                    type='submit'
                    >SIGN UP</button>

                </form>
        </div>
    </div>
  )
}

export default SignUp