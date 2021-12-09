import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [userId]);
  //   console.log(users);
  console.log(users?.slice(0, 3));

  const userDetails = users?.find((user) => user?.id == userId);
  //   console.log(userDetails);

  return (
    <div>
      <h1>{userDetails?.name}</h1>
      <h1>{userDetails?.email}</h1>
    </div>
  );
};

export default Details;
