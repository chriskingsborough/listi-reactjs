import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import Login from "../Login/Login";
import Lists from "../Lists/Lists";

// const token = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwMjY0Mzk3OSwiZXhwIjoxNjAzNjQzOTc5fQ.eyJ1c2VyX2lkIjoiYTBiZDY3OGYtNmU0My00OGQwLThlNzEtZDU0YTFjNmJmMjEyIiwiZW1haWwiOiJraW5nc0BlbWFpbC5jb20ifQ.ICZbAKkepGjdqtvUVuOO9-N0FyEWccK_8AuovHsUuqcNTVS4H6NaJj4x-sRvAhpta7ol-oGe4YICqA5Ymd92JA";
// const token = "";
// const listId = "513e0b3b-0d54-410c-9fc6-c3d15cdc9b96";
// const listId = "";

function Home(token, listId) {
  return (<Lists token={token} listId={listId} />)
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      listId: ""
    }
    this.handleToken = this.handleToken.bind(this);
  }

  handleToken(token) {
    this.setState({
      token: token
    })
  }

  render() {
    if (!this.state.token) {
      return (
        <Login handleToken={this.handleToken}/>
      );
    } else {
      return <Home token={this.state.token} listId={this.state.listId}/>;
    }
  }
}

export default App;
