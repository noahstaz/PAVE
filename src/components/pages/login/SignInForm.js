import { message, notification } from "antd";
import React, {useState} from "react";
import { Link,useHistory } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import "./App.css"

function SignInForm() {
  const history=useHistory();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('showLogin',false);
    console.log("The form was submitted with the following data:");
    console.log(localStorage.getItem("showLogin"));
    notification.info({
      message: `Logged in!`,
      duration: 1
    });
    history.push('/');
  }

    return (

      <div>
        
      <div className="App">
        <div className="appAside" />
        <div className="appForm">
          <div className="pageSwitcher">
          <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>
            { "   "}
            <Link to="/signup" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <GoogleLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
          </div>

        </div>
      </div>

      </div>
    );
  
}

export default SignInForm;
