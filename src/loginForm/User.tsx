import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext, user } from "../context/UserProvider";
import { Container } from "react-bootstrap";
import Header from "../Header";

const User: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { users = [] } = useContext(UserContext) || {};
  const user = users.find((user: user) => user.id === parseInt(id!));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <Header />
      <Container className="p-4 mt-5 card">
        <h1>
          {user.name} {user.lastName}
        </h1>
        <p>Username: {user.userName}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.pwd}</p>
      </Container>
    </>
  );
};

export default User;
