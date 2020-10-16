import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Lists.css";

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listId: props.listId,
      userToken: props.token,
      isLoaded: false,
      lists: [],
    };
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
    const { error, isLoaded, lists } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading lists...</div>;
    } else {
      console.log(this.state.userToken);
      console.log("Returning Lists");
      console.log(lists);
      return (
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
                <ListGroup.Item active={isActive}>{list[0]}</ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      );
    }
  }
}

export default Lists;
