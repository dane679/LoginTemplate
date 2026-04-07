import { FaFacebookF, FaGoogle, FaLinkedinIn, FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import './Login.css';
import { useEffect, useState } from 'react';

export default function Login() {
    /**
     * Toggles the "right-panel-active" class on the main container.
     * This drives the css driven animation.
     */
    const [RPA, setRPA] = useState(false);

    const togglePanel = () => {
        setRPA(prev => !prev);
    };

    //  This effect checksthe URL hash and updates the login container's class.
    // NOTE: This is a basic implementation and may not cover all edge cases. 
    // Depending on your needs or routing setup, you might want to consider using a more robust solution, 
    // such as React Router, to manage the URL and component state more effectively.
    useEffect(() => {

        function updateFromHash() {
            setRPA(window.location.hash === "#signup");
        }
        updateFromHash();
    }, []);

    return (
        <div className={`login-container ${RPA ? "right-panel-active" : ""}`} id='logw'>
            
            <div className='logup-container'>
                <div className='logup-wrapper'>
                    {/* ================= SIGN UP ================= */}
                    <div className='signup'>
                        <form action="#" className='logup-form'>
                            <h1>Create Account</h1>

                            {/* Social login placeholders (replace with real OAuth flows) */}
                            <div className="social-container">
                                <a href="" className='social1'><FaFacebookF /></a>
                                <a href="" className='social1'><FaGoogle /></a>
                                <a href="" className='social1'><FaLinkedinIn /></a>
                            </div>

                            <p>Enter your details to begin your journey with us.</p>

                            {/* Floating label input pattern */}
                            <div className="fil-wrapper">
                                <input type="text" name='name' placeholder='Name' id="signup-name" autoComplete="name" required />
                                <label htmlFor="signup-name" className='form-label'>Name</label>
                            </div>

                            <div className="fil-wrapper">
                                <input type="email" name='email' placeholder='Email' id="signup-email" autoComplete="email" required />
                                <label htmlFor="signup-email" className='form-label'>Email</label>
                            </div>

                            <div className="fil-wrapper">
                                <input type="password" name='password' placeholder='Password' id="signup-password" autoComplete="new-password" required />
                                <label htmlFor="signup-password" className='form-label'>Password</label>
                            </div>

                            <a className="atc" ><button type="button" className="atc-btn" onClick={togglePanel}>Already have an account?</button></a>
                            <button type='submit' className="sub-btn">Sign Up</button>
                        </form>
                    </div>

                    {/* ================= SIGN IN ================= */}
                    <div className='sign-in'>
                        <form action="" className='logup-form'>
                            <h1>Welcome Back!</h1>

                            {/* Social login placeholders (replace with real OAuth flows) */}
                            <div className="social-container">
                                <a href="" className='social1'><FaFacebookF /></a>
                                <a href="" className='social1'><FaGoogle /></a>
                                <a href="" className='social1'><FaLinkedinIn /></a>
                            </div>
                            <p>We're Exited to see you back!</p>

                            {/* Floating label input pattern */}
                            <div className="fil-wrapper">
                                <input type="email" name='email' placeholder='Email' id="signin-email" autoComplete="email" required />
                                <label htmlFor="signin-email" className='form-label'>Email</label>
                            </div>

                            <div className="fil-wrapper">
                                <input type="password" name='password' placeholder='Password' id="signin-password" autoComplete="current-password" required />
                                <label htmlFor="signin-password" className='form-label'>Password</label>
                            </div>

                            {/* May connect to a password reset flow */}
                            <a href="" className="pswf"> Forgotten Your Password?</a>
                            <a className="atc" >Don't have an account? <button type="button" className="atc-btn" onClick={togglePanel}>Register</button></a>
                            <button type='submit' className="sub-btn">Login</button>

                        </form>
                    </div>
                </div>
            </div>

            {/* 
                OVERLAY PANELS
                - Contains the main prompts and CTA buttons for sign in and sign up.
                - Amend to provide necessary branding and messaging for your application
            */}
            <div className="overlay-panel-container">
                <div className="overlay-panel-wrapper">
                    <div className="overlay-panel-left">
                        <h1>Welcome Back!</h1>
                        <p>We're Exited to see you back!</p>
                        <button id='sign-In' onClick={togglePanel}><FaArrowLeftLong /> Sign In</button>
                    </div>

                    <div className="overlay-panel-right">
                        <h1>Hello, Friend</h1>
                        <p>Enter your details to begin your journey with us.</p>
                        <button id='sign-Up' onClick={togglePanel}>Sign Up <FaArrowRightLong /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
