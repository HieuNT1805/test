import React from 'react';
import HomeBackground from "../img/background1.avif";
import "../style/login.css"

function Login() {
  return (
    <div className="login" style={{backgroundImage: `url(${HomeBackground})`}}>
            <form className="form-login">
                    <h1 className="title-login"><b>Log in</b>  </h1>

                    <label className="email-label" htmlFor="email">Email</label>
                    <input type="email" className="input-email" />

                    <label className="login-label" htmlFor="password" >Password </label>
                    <input type="password" className="input-password"  />



                    <button type="submit" className="btn btn-primary">Log in</button>
                    <p className="forgot-password text-right"> or <a href="/register"> Register Account</a>
        </p>
            </form>
    </div>
  )
}

export default Login
