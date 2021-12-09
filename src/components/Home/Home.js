import React, { useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import Users from "../Users/Users";

const Home = () => {
  const [control, setControl] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [control]);
  return (
    <div>
      <h1>Home page</h1>
    
      {/* <button onClick={() => setControl(true)}>reload</button> */}

      {users?.map((user) => (
        <Users user={user}></Users>
      ))}
    </div>
  );
};

export default Home;
