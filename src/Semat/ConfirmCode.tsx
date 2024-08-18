import { MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

interface otpData {
  userName: string;
  password: string;
  otpCode: string;
}

const confirmationurl =
  "https://semat.band56.ir/api/v1/Accounts/two-factor-login";

const ConfirmCode = () => {
  const location = useLocation();
  const { userName, password } = location.state as otpData;
  const [otp, setOtp] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postData = {
      userName,
      password,
      otpCode: otp,
    };
    axios
      .post(confirmationurl, postData)
      .then((response) => {
        console.log("Post response:", response.data);
        if (response.status === 200) {
          navigate("/requestForm/");
        } else {
          setErrorMessage("OTP code does not match. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <MDBInput
          wrapperClass="mb-4"
          label="OTP Code"
          id="formControlLg3"
          type="text"
          size="lg"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {errorMessage && <div className="text-danger mb-4">{errorMessage}</div>}
        <button className="btn bg-primary text-light" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmCode;
