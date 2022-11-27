import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./App.css";
import { message } from "antd";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      redirect:false,
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
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const person = {
      userName:this.state.userName,
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      show: false
    }
    localStorage.setItem("newUser", JSON.stringify(person));
    console.log("The form was submitted with the following data:");
    console.log(localStorage.getItem("newUser"));
    message.success("Registered!");
    this.setState({redirect:true})
  }

  render() {
    return (
      <div>
        <div className="App">
        <div className="appAside" />
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="userName">
              User Name
            </label>
            <input
              type="userName"
              id="userName"
              className="formFieldInput"
              placeholder="Enter your user name"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
              <button className="formFieldButton">            
              hello

              </button>{" "}
            <Link to="/signin" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
        {this.state.redirect && <><Redirect to='/signin'/> </>}
        
      </div>
          </div>

        </div>
      </div>
      </div>
 
    );
  }
}
export default SignUpForm;
