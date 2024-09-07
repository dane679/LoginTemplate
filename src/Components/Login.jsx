import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn  } from "react-icons/fa6";

export default function Login() {

    const main = document.getElementById("logw");

    const sua = () =>{
        main.classList.add("right-panel-active");
    }; 

    const sia = () =>{
        main.classList.remove("right-panel-active");
    };

    const rpa = () =>{
        main.classList.toggle("right-panel-active");
    };

  return (
    <div className='login-container' id='logw'>
        <div className='signup'>
            <form action="#" className='logup-form'>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className='social1'><FaFacebookF/></a>
                    <a href="#" className='social1'><FaGoogle/></a>
                    <a href="#" className='social1'><FaLinkedinIn /></a>
                </div>
                
                    <p>Enter your details to begin your journey with us.</p>
                    <input type="text" name='txt' placeholder='Name' required/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <input type="password" name='pswd' placeholder='Password' required/>
                    <a className="atc" onClick={sia}><span>Already have an account?</span></a>
                    <button type='submit'>Sign Up</button>
            </form>
        </div>

        <div className='sign-in'>
            <form action="#" className='logup-form'>
                <h1>Welcome Back!</h1>
                <div className="social-container">
                    <a href="#" className='social1'><FaFacebookF/></a>
                    <a href="#" className='social1'><FaGoogle/></a>
                    <a href="#" className='social1'><FaLinkedinIn /></a>
                </div>
                    <p>We're Exited to see you back!</p>
                    <input type="email" name='email' placeholder='Email' required/>
                    <input type="password" name='password' placeholder='Password' required/>
                    <a href="#" className="pswf"> Forgotten Your Password?</a>
                    <a className="atc" onClick={rpa}>Don't have an account? <span>Register</span></a>
                    <button type='submit'>Login</button>
               
            </form>
        </div>

        <div className="overlay-panel-container">
            <div className="overlay-panel-wrapper">
                <div className="overlay-panel-left">
                    <h1>Welcome Back!</h1>
                    <p>We're Exited to see you back!</p>
                    <button id='sign-In' onClick={rpa}>Sign In</button>
                </div>

                <div className="overlay-panel-right">
                    <h1>Hello, Friend</h1>
                    <p>Enter your details to begin your journey with us.</p>
                    <button id='sign-Up' onClick={sua}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
