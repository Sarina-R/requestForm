import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const User = () => {
  const user = useContext(UserContext);
  console.log(user);
  // const {id} = useParams
  return <div>User</div>;
};

export default User;
