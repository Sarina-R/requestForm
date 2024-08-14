import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

interface SigninProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPwd: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPwd: React.Dispatch<React.SetStateAction<string>>;
  pwd: string;
}

const Signup: React.FC<SigninProps> = ({
  setEmail,
  setUserName,
  setPwd,
  setConfirmPwd,
  handleSubmit,
  pwd,
}) => {
  const [emailClass, setEmailClass] = useState<string>("");
  const [userNameClass, setUserNameClass] = useState<string>("");
  const [pwdClass, setPwdClass] = useState<string>("");
  const [pwdConfirmClass, setPwdConfirmClass] = useState<string>("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailClass("is-invalid");
    } else {
      setEmailClass("is-valid");
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
    if (value.length < 4 || value.length > 20) {
      setUserNameClass("is-invalid");
    } else {
      setUserNameClass("is-valid");
    }
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    setPwd(value);
    if (!re.test(value)) {
      setPwdClass("is-invalid");
    } else {
      setPwdClass("is-valid");
    }
  };

  const handlePwdConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPwd(value);
    if (value !== pwd || value.length < 6) {
      setPwdConfirmClass("is-invalid");
    } else {
      setPwdConfirmClass("is-valid");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event as unknown as React.FormEvent);
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

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email address"
                id="formControlSi1"
                type="email"
                size="lg"
                onChange={handleEmailChange}
                onKeyDown={handleKeyDown}
                className={emailClass}
              />
              {emailClass === "is-invalid" ? (
                <p className="text-danger mx-5 w-100 pl-5">
                  User Name must be more than
                </p>
              ) : emailClass === "is-valid" ? (
                <></>
              ) : null}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                id="formControlSi2"
                type="text"
                size="lg"
                onChange={handleUserNameChange}
                onKeyDown={handleKeyDown}
                className={userNameClass}
              />
              {userNameClass === "is-invalid" ? (
                <p className="text-danger mx-5 w-100">
                  Email must be in the format: example@domain.com.
                </p>
              ) : userNameClass === "is-valid" ? (
                <></>
              ) : null}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100 "
                label="Password"
                id="formControlSi3"
                type="password"
                size="lg"
                onChange={handlePwdChange}
                onKeyDown={handleKeyDown}
                className={pwdClass}
              />
              {pwdClass === "is-invalid" ? (
                <p className="text-danger mx-5 w-100">
                  Password must be at least 8 characters long and include at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character
                </p>
              ) : pwdClass === "is-valid" ? (
                <></>
              ) : null}

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Confirm Password"
                id="formControlSi4"
                type="password"
                size="lg"
                onChange={handlePwdConfirmChange}
                onKeyDown={handleKeyDown}
                className={pwdConfirmClass}
              />
              {pwdConfirmClass === "is-invalid" ? (
                <p className="text-danger mx-5 w-100">
                  Please confirm your password by entering it again
                </p>
              ) : pwdConfirmClass === "is-valid" ? (
                <></>
              ) : null}

              <MDBBtn
                type="submit"
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
                disabled={
                  pwdConfirmClass === "is-invalid" ||
                  pwdClass === "is-invalid" ||
                  emailClass === "is-invalid" ||
                  userNameClass === "is-invalid"
                    ? true
                    : false
                }
              >
                Sign up
              </MDBBtn>
            </form>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Already have an account?
              <Link to="/requestForm/login">
                <a className="link-info d-block">Login</a>
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
