import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { UserContext, user } from "../context/UserProvider";

const Signup: React.FC = () => {
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
      // Optionally, send the new user data to the server
      await axios.post("/users.json", newUser);
      navigate(`/requestForm/user/${newUser.id}`);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Sign up
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Email address"
              id="formControlSi1"
              type="email"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="UserName"
              id="formControlSi2"
              type="username"
              size="lg"
              onChange={(e) => setUserName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlSi3"
              type="password"
              size="lg"
              onChange={(e) => setPwd(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Confirm Password"
              id="formControlSi4"
              type="password"
              size="lg"
              onChange={(e) => setConfirmPwd(e.target.value)}
            />

            <MDBBtn
              type="button"
              className="mb-4 px-5 mx-5 w-100"
              color="info"
              size="lg"
              onClick={handleSubmit}
            >
              Sign up
            </MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Already have an account?
              <Link to="/requestForm/login">
                <a className="link-info d-block">Sign up</a>
              </Link>
            </p>
          </div>
        </MDBCol>

        <MDBCol
          sm="6"
          className="d-flex justify-content-end d-none d-sm-block px-0"
        >
          <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Sign up image"
              className="w-100 justify-content-end"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
