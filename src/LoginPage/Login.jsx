import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='facebook'>
            <div className='text'>
                facebook
            </div>
            <div className='title'>
                Facebook helps you can connect and share <br /> with the people in your life
            </div>
        </div>
        <div className='login-container'>
            <div className='login-detail'>
                <input type="text" placeholder='Username or email address'/>
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <button className='btn'> Login</button>
                <div className='forget'>
                    <a href="forget">Forgetten password</a>
                    <br />
                </div>
            </div>
            <div className='create'>
                <br />
                <button className='btns'>Create New Account</button>
            </div>
        </div>
    </div>
  )
}

export default Login