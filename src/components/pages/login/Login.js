import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    return (
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" id='email' placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" id='password' placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <div>
        <label>OR</label>
        <Link to='/register'><button className="loginRegisterButton">Register</button></Link>
        </div>
    </div>
        
    );
}
export default Login
