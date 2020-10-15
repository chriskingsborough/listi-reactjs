import React, { useState } from "react";
const axios = require("axios");

export default class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    login(data);
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

// hits login api and sets localstorage to be the user/token
const login = (data) => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ name: "Tom", password: "Soyer" }),
    });
    // axios
    //   .get(`http://localhost:5000/user/login`, {
    //     email: data.get("email"),
    //     password: data.get("password"),
    //   })
    //   .then((response) => {
    //     localStorage.setItem("current_user", JSON.stringify(response.data));
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
  });
};
