// import { useState, useEffect } from "react";
// import { MDBInput } from "mdb-react-ui-kit";
// import axios from "axios";

// const urlGet = "https://semat.band56.ir/api/v1/default/generate-captcha";
// const urlPost = "https://semat.band56.ir/api/v1/Accounts/one-factor-login";

// export interface CaptchaData {
//   captchaId: string;
//   captchaCode: string;
// }

// const LoginCapInput = () => {
//   const [captchaData, setCaptchaData] = useState<CaptchaData | null>(null);

//   useEffect(() => {
//     axios
//       .get(urlGet)
//       .then((response) => {
//         console.log("Fetched data:", response.data.content); // checking
//         setCaptchaData(response.data.content);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleClick = (e) => {
//     e.preventDefault()
//     axios.post(urlPost, {post})
//   };

//   return (
//     <>
//       <MDBInput
//         wrapperClass="mb-4 mx-5 w-100"
//         label="Captcha"
//         id="formControlLg2"
//         type="captcha"
//         size="lg"
//       />
//       <button className="btn m-2 mx-5 w-100" onClick={handleClick}>
//         {captchaData ? captchaData.captchaCode : "Loading..."}
//       </button>
//     </>
//   );
// };

// export default LoginCapInput;
