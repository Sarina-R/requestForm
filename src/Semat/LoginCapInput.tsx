import { useState, useEffect } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const urlGet = "https://semat.band56.ir/api/v1/default/generate-captcha";
const urlPost = "https://semat.band56.ir/api/v1/Accounts/one-factor-login";

export interface CaptchaData {
  captchaId: string;
  captchaCode: string;
}

const LoginCapInput = () => {
  const [captchaData, setCaptchaData] = useState<CaptchaData | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cap, setCap] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(urlGet)
      .then((response) => {
        console.log("Fetched data:", response.data.content); // checking
        setCaptchaData(response.data.content);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cap === captchaData?.captchaCode) {
      const postData = {
        userName,
        password,
        captchaId: captchaData.captchaId,
        captchaCode: captchaData.captchaCode,
      };
      axios
        .post(urlPost, postData)
        .then((response) => {
          console.log("Post response:", response.data);
          navigate("/requestForm/semat/confirmation", {
            state: { userName, password },
          });
        })
        .catch((error) => console.error("Error posting data:", error));
    } else {
      console.log("Captcha code does not match");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="formControlLg1"
            type="text"
            size="lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg2"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Captcha Code"
            id="formControlLg2"
            size="lg"
            value={cap}
            onChange={(e) => setCap(e.target.value)}
          />

          <div className=" btn mb-4  " color="info">
            {captchaData ? captchaData.captchaCode : ""}
          </div>
          <button className="btn  bg-primary text-light" onClick={handleClick}>
            {captchaData ? "Submit" : "Loading..."}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginCapInput;
