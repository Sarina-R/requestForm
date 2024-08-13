import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Signup from "./Signup";
import axios from "axios";
import { UserContext, user } from "../context/UserProvider";

const SignupForm = () => {
  const { users, setUsers } = useContext(UserContext) || {
    users: [],
    setUsers: () => {},
  };
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (pwd !== confirmPwd) {
      alert("Passwords do not match");
      return;
    }

    const newUser: user = {
      id: users.length + 1,
      userName,
      pwd,
      email,
      name: "",
      lastName: "",
    };

    try {
      // Add the new user to the state
      setUsers([...users, newUser]);
      // send the new user data to the server
      await axios.post("/users.json", newUser);
      navigate(`/requestForm/user/${newUser.id}`);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <>
      <Header />
      <Signup
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setUserName={setUserName}
        setPwd={setPwd}
        setConfirmPwd={setConfirmPwd}
      />
    </>
  );
};

export default SignupForm;
