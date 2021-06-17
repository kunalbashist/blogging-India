import React from 'react';
import "./Register.css"
import { Link } from 'react-router-dom';

 function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" id='username' placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" id='email' placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" id='password' placeholder="Enter your password..." />
        <Link to='/creat'><button className="registerButton">Register</button></Link>
      </form>
      <div >
        <label>OR</label>
      <Link to='/creat'><button className="registerLoginButton">Login</button></Link>
    </div>
    </div>
    )
}

export default Register