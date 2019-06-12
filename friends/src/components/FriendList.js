import React from "react";
import Friend from "./Friend";

const FriendList = props => {
  console.log(props);
  const { friends, clickUpdateButton } = props;
  return (
    <section>
      <div>
        {friends.map(friend => (
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
};

export default FriendList;
