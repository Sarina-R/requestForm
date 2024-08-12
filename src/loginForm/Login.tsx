import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

interface LoginProps {
  handleSubmit: () => void;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPwd: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ handleSubmit, setPwd, setUserName }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
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
              Login
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Username"
              id="formControlLg1"
              type="text"
              size="lg"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg2"
              type="password"
              size="lg"
              onChange={(e) => setPwd(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <MDBBtn
              type="button"
              onClick={handleSubmit}
              className="mb-4 px-5 mx-5 w-100"
              color="info"
              size="lg"
            >
              Login
            </MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5">
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p className="ms-5">
              Don't have an account?
              <Link to="/requestForm/signup">
                <a className="link-info d-block">Register here</a>
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
              alt="Login image"
              className="w-100 justify-content-end"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
