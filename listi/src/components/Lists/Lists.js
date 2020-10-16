import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Lists.css";

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <ListGroup>
          {lists.map((list) => {
            return <ListGroup.Item>{list[0]}</ListGroup.Item>;
          })}
        </ListGroup>
      );
    }
  }
}

export default Lists;
