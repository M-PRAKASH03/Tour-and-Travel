import './Login-signup.css';
import React, { useState } from "react";


function LoginSignup(){
    const[data,setData]  =useState({username : "",email :"",password :""})

    const handlChange=(event)=>{
        const {name,value} =event.target
        setData((preData)=>({...preData,[name]:value}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(data)
    }

    return(
       <>
       <div className='continar-body'>
       <div className="continar">
        <div className='noob-continar'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
{/* name */}
       <form onSubmit={handleSubmit} >
        <div className="inputs">
            <div className="input">
            <i class="fa-solid fa-user"></i>
                <input type="text"
                placeholder="Name"
                name="username"
                minLength={6}
                onChange={handlChange} 
                required
                />
            </div>
{/* email */}
            <div className="input">
            <i class="fa-solid fa-envelope"></i>
                <input type="email"
                  placeholder="Email"
                  name="email" 
                  onChange={handlChange}
                  required
                  />
            </div>
 {/* password  */}
            <div className="input">
            <i class="fa-sharp fa-solid fa-lock"></i>
                <input type="password"
                  placeholder="Password"
                  name="password" 
                  minLength={8}
                onChange={handlChange}
                required 
                />
            </div>
            <div className="forget-password">Forget password? <span><a href="/">Click Here!</a></span></div>
            <div className="submit-continar">
                <button type="submit" className="submit" >Sign Up</button>
                {/* <input type="submit" className="submit"/> */}
            </div>

        </div>
        </form>
        </div>
       </div>
       </div>
      </>
       )
}
export default LoginSignup;