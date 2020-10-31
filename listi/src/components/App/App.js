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
