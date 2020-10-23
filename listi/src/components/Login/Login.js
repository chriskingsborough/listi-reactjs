import React, { useState } from "react";
const axios = require("axios");

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      token: "",
      error: false,
    };
  }

  login() {
    fetch(`/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "jarz@gmail.com", password: "password" }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        localStorage.setItem("Token", result);
        console.log("token logged");
        console.log(localStorage.getItem("Token"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.login(data.get("email"), data.get("password"));
    console.log(localStorage.getItem("Token"));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="email">Enter password</label>
        <input id="password" name="password" type="password" />

        <button>Send data!</button>
      </form>
    );
  }
}

export default Login;
