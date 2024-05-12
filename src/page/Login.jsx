import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <img src="../../public/fb logo.svg" alt="" className='login-logo'/>
        <div className='login-container'>
            <h3>Log In To Facebook</h3>
            <form action="">
                <center>
                    <input type="text" placeholder='Email Address'/>
                </center>
                <center>
                    <input type="password" placeholder='Password'/>
                </center>
                <center>
                    <button type='submit' className='login-login'>
                        Login
                    </button>
                </center>
                <center>
                    <div className="sideinfo">
                        <h5>Forrgoten Password</h5>
                        <h5 className='dot'>.</h5>
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <h5 className='rtd'>Sign up for Facebook</h5>
                        </Link>
                    </div>
                </center>
            </form>
        </div>
    </div>
  )
}

export default Login