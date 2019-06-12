import React from "react";
import axios from "axios";
import Friend from "./Friend";

class FriendList extends React.Component {
  state = {
    friends: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: [...res.data] }))
      .catch(err => console.error(err));
  }
  render() {
    const { friends, clickUpdateButton } = this.props;
    return (
      <section>
        <div>
          {this.state.friends.map(friend => (
            <Friend
              friend={friend}
              key={friend.id}
              clickUpdateButton={clickUpdateButton}
              // handleDelete={this.handleDelete}
              // handleUpdate={this.handleUpdate}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default FriendList;
