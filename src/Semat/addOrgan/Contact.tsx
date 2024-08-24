import { Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";

const Contact = () => {
  return (
    <Row className="m-4">
      <h2>Organization Contact Information</h2>
      <MDBInput
        wrapperClass="mb-4"
        label="Email"
        id="formControlLg1"
        type="text"
        size="lg"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Website"
        id="formControlLg1"
        type="text"
        size="lg"
      />
    </Row>
  );
};

export default Contact;
