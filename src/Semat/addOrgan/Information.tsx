import { MDBInput } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";

const Information = () => {
  return (
    <Row className="m-4">
      <h2>Organization Information </h2>
      <MDBInput
        wrapperClass="mb-4"
        label="Organization’s Persian Title"
        id="formControlLg1"
        type="text"
        size="lg"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Organization’s English Title "
        id="formControlLg1"
        type="text"
        size="lg"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Parent Organization"
        id="formControlLg1"
        type="text"
        size="lg"
      />
    </Row>
  );
};

export default Information;
