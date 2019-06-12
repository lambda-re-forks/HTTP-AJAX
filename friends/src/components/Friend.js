import React from "react";
import { withRouter } from "react-router-dom";

const Friend = props => {
  const { name, age, email } = props.friend;
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
      <button onClick={e => props.clickUpdateButton(e, props.friend)}>
        Update
      </button>
      <button>Delete</button>
    </div>
  );
};

export default withRouter(Friend);
