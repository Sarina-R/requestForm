import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm.tsx";
import RequestPage from "./requestPage/RequestPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/requestForm/" element={<App />} />
        <Route path="/requestForm/login" element={<LoginForm />} />
        <Route path="/requestForm/requests" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
