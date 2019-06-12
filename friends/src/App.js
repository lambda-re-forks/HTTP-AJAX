import React from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      activeFriend: {}
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: [...res.data] }))
      .catch(err => console.error(err));
  }
  handleAdd = (e, newFriend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
    this.props.history.push("/");
  };
  clickUpdateButton = (e, friend) => {
    console.log("here");
    e.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push("/new-friend");
  };
  handleUpdate = e => {};
  handleDelete = e => {};
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          path="/"
          exact
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              clickUpdateButton={this.clickUpdateButton}
            />
          )}
        />
        <Route
          path="/new-friend"
          render={props => (
            <FriendForm
              {...props}
              handleAdd={this.handleAdd}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
