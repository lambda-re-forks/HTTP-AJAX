import React from "react";
import { withRouter } from "react-router-dom";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  const clickUpdateButton = e => {
    e.preventDefault();
    props.history.push(`/new-friend/${id}`);
  };
  return (
    <div className="friend">
      <p>
        <span>Name:</span>
        {name}
      </p>
      <p>
        <span>Age:</span>
        {age}
      </p>
      <p>
        <span>Email:</span>
        {email}
      </p>
      <button onClick={clickUpdateButton}>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default withRouter(Friend);
