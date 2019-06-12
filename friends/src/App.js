import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
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
              // friends={this.state.friends}
              clickUpdateButton={this.clickUpdateButton}
            />
          )}
        />
        <Route
          path="/new-friend"
          exact
          render={props => (
            <FriendForm
              {...props}
              // handleAdd={this.handleAdd}
              // activeFriend={this.state.activeFriend}
            />
          )}
        />
        <Route
          path="/new-friend/:friendId"
          render={props => <FriendForm {...props} />}
        />
      </div>
    );
  }
}

export default App;
