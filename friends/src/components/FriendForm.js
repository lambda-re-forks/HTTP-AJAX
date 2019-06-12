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
  //    handleAdd = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:5000/friends", this.state.newFriend)
  //       .then(res => console.log(res.data))
  //       .catch(err => console.error(err));
  //     this.props.history.push("/");
  //   };
  componentDidMount() {
    if (this.props.activeFriend.hasOwnProperty("name")) {
      this.setState({ activeFriend: this.props.activeFriend });
    } else {
      this.setState({ activeFriend: { name: "", age: "", email: "" } });
    }
  }
  handleChanges = e => {
    this.setState({
      newFriend: { ...this.state.newFriend, [e.target.name]: e.target.value }
    });
  };
  render() {
    console.log(this.props);
    const { name, age, email } = this.state.newFriend;
    return (
      <form onSubmit={e => this.props.handleAdd(e, this.state)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={this.state.activeFriend.name || name}
          name="name"
          placeholder="Name"
          id="name"
          onChange={this.handleChanges}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          value={this.state.activeFriend.age || age}
          name="age"
          placeholder="Age"
          id="age"
          onChange={this.handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={this.state.activeFriend.email || email}
          name="email"
          placeholder="Email"
          id="email"
          onChange={this.handleChanges}
        />
        <button>{this.state.activeFriend ? "Update" : "Submit"}</button>
      </form>
    );
  }
}

export default FriendForm;
