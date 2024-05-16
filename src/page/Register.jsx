import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className='register'>
      <img src="../../public/fb logo.svg" alt="" className='register-logo'/>
      <div className="register-container">
        <h1>Create a new account</h1>
        <p>It's quick and easy.</p>
        <div className="hr3"></div>
        <form>
          <div className="row">
            <input type="text" placeholder='First Name' className='register-name'/>
            <input type="text" placeholder='Last Name' className='register-name'/>
          </div>
          <center>
            <input type="text" name="email" placeholder='Email Address' />
          </center>
          <center>
            <input type="password" name="password" placeholder='New Password' />
          </center>
          <h5 className="register-date">Date of birth</h5>
          <div className="row">
            <select className='register-date2'>
              <option value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <select className='register-date3'>
              <option value="">Month</option>
              <option value="1">Jan</option>
              <option value="2">Feb</option>
              <option value="3">Mar</option>
              <option value="4">Apr</option>
              <option value="5">May</option>
              <option value="6">Jun</option>
              <option value="7">Jul</option>
              <option value="8">Aug</option>
              <option value="9">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <select className='register-date3'>
              <option value="2023">2023</option>
              <option value="2023">2022</option>
              <option value="2023">2021</option>
              <option value="2023">2020</option>
              <option value="2023">2019</option>
              <option value="2023">2018</option>
              <option value="2023">2017</option>
              <option value="2023">2016</option>
              <option value="2023">2015</option>
              <option value="2023">2014</option>
              <option value="2023">2013</option>
              <option value="2023">2012</option>
              <option value="2023">2011</option>
              <option value="2023">2010</option>
              <option value="2023">2009</option>
              <option value="2023">2008</option>
              <option value="2023">2007</option>
            </select>
          </div>

          <h5 className="register-gender">
            Gender
          </h5>
          <div className="register-radiocontainer">
            <div className='wrapper'>
              <label>Female</label>
              <input type="radio" name="gender" value='Female'/>
            </div>
            <div className='wrapper'>
              <label>Male</label>
              <input type="radio" name="gender" value='Male'/>
            </div>
            <div className='wrapper'>
              <label>Custom</label>
              <input type="radio" name="gender" value='Other'/>
            </div>
          </div>
          <center>
            <h5 className='register-text m-10'>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more</a>.</h5>
            
            <h5 className='register-text'>By clicking Sign Up, you agree to our <a>Terms</a>, <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</h5>
          </center>
          <center>
              <button type='submit' className='register-register'>Sign Up</button>
          </center>
          <center>
            <Link to="/">
              <p className='register-login'>Already have an account ?</p>
            </Link>
          </center>
        </form>
      </div>
    </div>
  )
}

export default Register