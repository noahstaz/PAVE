import React, { Component } from "react";
import { Link } from "react-router-dom";
import { notification } from "antd";
import "../login/App.css";
import logo from '../../../assets/pave_logo.jpg';
class Verify extends Component {
  constructor() {
    super();

    this.state = {
      userName:"",
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
  }

  handleSubmit(e) {
    e.preventDefault();

    notification.info({
      message: `Success! Pending verification`,
      duration: 5
    });
    this.timeout(30000)
    .then( ()=>{
      let temp = JSON.parse(localStorage.getItem('newUser'));
      temp.show=true;
      localStorage.setItem('newUser', JSON.stringify(temp));
    }

    )
  }
  timeout(delay) {
    return new Promise( res => setTimeout(res, delay));
}
  render() {
    return (
      <div>
        <div className="App">
        <div  />
        <img className="logoVerify" src={logo}></img>
        <h1>Verify your credentials </h1>
        <div className="appForm">
          <div className="pageSwitcher">

          
          <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>
          
          <div className="formField">
            <label className="formFieldLabel" htmlFor="file">
              Your government issued id 
            </label>
            <input
              type="file"
              className="formFieldInput"
              onChange={this.handleFileChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="file">
              Your address
            </label>
            <input
              type="address"
              className="formFieldInput"
            />
          </div>
          
          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>
          <div className="formField">
            <button onClick={this.handleSubmit}  className="formFieldButton">            
              <Link to="/"  className="nextLink">
                Next
              </Link>
            </button>{" "}
            <Link to="/" className="formFieldLink">
              I am not ready to sign up just yet
            </Link>
          </div>
        </form>
      </div>
          </div>

        </div>
      </div>
      </div>
 
    );
  }
}
export default Verify;
