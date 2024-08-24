import { MDBInput } from "mdb-react-ui-kit";
import Header from "../../Header";
import { Button, Row, Form } from "react-bootstrap";
import { useState } from "react";
import Information from "./Information";
import Status from "./Status";
import Addres from "./Addres";
import Contact from "./Contact";
import SystemInfo from "./SystemInfo";

const AddOrgan = () => {
  return (
    <>
      <Header />
      <div className="container addOrgan">
        <Information />

        <Status />

        <Addres />

        <Contact />

        <SystemInfo />
      </div>
    </>
  );
};

export default AddOrgan;
