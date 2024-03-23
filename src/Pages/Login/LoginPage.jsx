import React,{useState} from 'react'
import { useAuth } from '../store/auth';
import './LoginPage.css';
import { MdAttachEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; 
// import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const URL = "http://localhost:5000/api/auth/login";
function LoginPage() {
    const[loginuser,setLoginUser]=useState({
        email:"",
        // username:"",
        password:""
    })

    const navigate = useNavigate();
    
    const  {storeTokenInLS}  = useAuth();

    const handleLoginInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
    setLoginUser({
        ...loginuser,
        [name]: value
    })
    }
     const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(loginuser),
            });

            console.log("login form",response);
            if(response.ok)
            {
                alert("login successful")
                setLoginUser({ email:"",
                // username:"",
                password:""})
                const res_data= await response.json();
                console.log(res_data.token);
                storeTokenInLS(res_data.token);
                navigate("/");
            }else{
                alert("invalid credential");
                console.log("invalid credential");
            }
        } catch (error) {
            console.log(error);
        }
        
     }
  return (
    <div className='login-page-section'>
            <div className="login-form-ctn">
                
                <h1>USER LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-box'>
                        <div id='email-icon'>
                        <MdAttachEmail style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="email" name="email" id="login-email" placeholder="Email" className='input-filed'
                        value={loginuser.email}
                        onChange={handleLoginInput}/>
                    </div>

                    {/* <div className='input-box'>
                        <div id='email-icon'>
                        <FaUser style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="text" name="username" id="" placeholder="Username" className='input-filed'
                         onChange={handleLoginInput}/>
                    </div> */}

                    <div className='input-box'>
                        <div id='email-icon'>
                        <FaLock style={{color:'#999'}} size={20}/>
                        </div>
                        <input type="password" name="password" id="login-password" placeholder="Password" className='input-filed'
                        value={loginuser.password}
                         onChange={handleLoginInput}/>
                    </div>
                    <button id='login-btn' type='submit'>LOGIN</button>

                </form>
                
            </div>
    </div>
  )
}

export default LoginPage