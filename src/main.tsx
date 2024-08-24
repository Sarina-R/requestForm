import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import RequestPage from "./requestPage/RequestPage";
import SignupForm from "./loginForm/SignupForm";
import User from "./loginForm/User";
import UserProvider from "./context/UserProvider";
import LoginCapInput from "./Semat/LoginCapInput";
import ConfirmCode from "./Semat/ConfirmCode";
import TableComponent from "./Semat/table/Table";
import AddOrgan from "./Semat/addOrgan/AddOrgan";

const Root: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/requestForm/" element={<App />} />
          <Route path="/requestForm/login" element={<LoginForm />} />
          <Route path="/requestForm/signup" element={<SignupForm />} />
          <Route path="/requestForm/requests" element={<RequestPage />} />
          <Route path="/requestForm/user/:id" element={<User />} />
          <Route path="/requestForm/semat/login" element={<LoginCapInput />} />
          <Route path="/requestForm/semat/table" element={<TableComponent />} />
          <Route path="requestForm/semat/addOrgan" element={<AddOrgan />} />
          <Route
            path="/requestForm/semat/confirmation"
            element={<ConfirmCode />}
          />
        </Routes>
      </UserProvider>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
