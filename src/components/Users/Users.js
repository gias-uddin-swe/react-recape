import React from "react";
import { Link } from "react-router-dom";

const Users = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>{user?.name}</h1>
      <Link to={`/details/${user.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Users;
