import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      <NavLink to="/" exact>
        Friends
      </NavLink>
      <NavLink to="/new-friend">Add A Friend</NavLink>
    </nav>
  );
};

export default NavBar;
