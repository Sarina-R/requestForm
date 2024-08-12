import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Login from "./Login";
import { UserContext } from "../context/UserProvider";

function LoginForm() {
  const { users } = useContext(UserContext) || { users: [] };
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = users.find(
      (user) => user.userName === userName && user.pwd === pwd
    );
    if (user) {
      navigate(`/user/${user.id}`);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Header />
      <Login
        handleSubmit={handleSubmit}
        setUserName={setUserName}
        setPwd={setPwd}
      />
    </>
  );
}

export default LoginForm;
