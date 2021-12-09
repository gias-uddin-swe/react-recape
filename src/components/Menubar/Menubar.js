import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <h1>This is menubar</h1>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menubar;
