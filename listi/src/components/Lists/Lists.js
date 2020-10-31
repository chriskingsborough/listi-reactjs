import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Lists.css";



class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listId: props.listId,
      userToken: props.token.token,
      isLoaded: false,
      lists: [],
      // update singlelist type
      listId: "",
      listData: []
    };
  }

  handleListClick(listId, event) {
    if (listId) {
      fetch(`/lists/${listId}`, {
        method: "GET",
        headers: {
          Token: this.state.userToken
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          listId: listId,
          listData: result
        })
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  componentDidMount() {
    fetch(`/lists`, {
      method: "GET",
      headers: {
        Token: this.state.userToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          isLoaded: true,
          lists: result,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error: error,
        });
      });
  }

  render() {
    const { error, isLoaded, lists, listId, listData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading lists...</div>;
    } else {
      console.log(listId);
      console.log(listData);
      return (
        <div className="home">
        <div className="sidenav">
          <a href="#">listi</a>
          <ListGroup>
            {lists.map((list) => {
              // check if the list item id == state id
              let isActive;
              if (list[1] == this.state.listId) {
                isActive = true;
              }
              return (
                <ListGroup.Item 
                  active={isActive}
                  eventKey={list[1]}
                  /*onClick={this.handleListClick}*/
                  onClick={this.handleListClick.bind(this, list[1])}>{list[0]}</ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <div className="main">
            <h1>{this.state.listData.name}</h1>
        </div>
        </div>
      );
    }
  }
}

export default Lists;
