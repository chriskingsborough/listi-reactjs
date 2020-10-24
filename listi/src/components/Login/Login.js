import React, { useState, createRef } from "react";
// const axios = require("axios");

class Login extends React.Component {
  constructor() {
    super();
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      token: "",
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async login(email, password) {
    return fetch(`/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email,
        password: password 
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        localStorage.setItem("Token", result.token);
        return result.token;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async handleSubmit(event) {
    const email = this.email.current.value;
    const password = this.password.current.value;

    event.preventDefault();
    const token = await this.login(email, password);
    this.props.handleToken(token);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter email</label>
        <input id="email" name="email" type="email" ref={this.email}/>

        <label htmlFor="email">Enter password</label>
        <input id="password" name="password" type="password" ref={this.password}/>

        <button>Login!</button>
      </form>
    );
  }
}

export default Login;
