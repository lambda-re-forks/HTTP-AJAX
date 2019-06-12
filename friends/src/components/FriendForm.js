import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      },
      activeFriend: {}
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.friendId);
    const friendId = this.props.match.params.friendId;
    if (friendId) {
    }
  }
  handleAdd = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(res => this.props.history.push("/"))
      .catch(err => console.error(err));
  };
  handleChanges = e => {
    this.setState({
      newFriend: { ...this.state.newFriend, [e.target.name]: e.target.value }
    });
  };
  render() {
    console.log(this.props);
    const { name, age, email } = this.state.newFriend;
    return (
      <form onSubmit={this.handleAdd}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          id="name"
          onChange={this.handleChanges}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          value={age}
          name="age"
          placeholder="Age"
          id="age"
          onChange={this.handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="Email"
          id="email"
          onChange={this.handleChanges}
        />
        <button>{"Submit"}</button>
      </form>
    );
  }
}

export default FriendForm;
