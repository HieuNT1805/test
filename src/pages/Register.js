import React, {useState} from 'react'
import HomeBackground from "../img/background1.avif";
import "../style/register.css";

function Register() {
  return (
    <div className="register" style={{backgroundImage: `url(${HomeBackground})`}}>
          
          <form className="form-register" >
              <h1> <b>REGISTER</b> </h1>
              
                    <label className="register-label" htmlFor="name">First name *</label>
                    <input type="text" className="form-control"  />

                    <label className="register-label" htmlFor="name" >Last name *</label>
                    <input type="text" className="form-control" />
              
                    <label className="email-title" htmlFor="email">Email *</label>
                    <input type="email" className="form-control"  />
               
                    <label className="register-label" >Password *</label>
                    <input type="password" className="form-control"  />
              
                    <button type="submit" className="btn btn-primary">Sign in</button>
              
                    <p className="forgot-password text-right"> Already registered <a href="/login">Log in?</a></p>
              
          </form>
          </div>
          
      

  )
}

export default Register
