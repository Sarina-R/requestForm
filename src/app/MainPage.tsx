import { Form, Container, Row, Col, Stack } from "react-bootstrap";
import Select from "react-select";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const option = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
];

const SearchableSelect = () => <Select options={option} isSearchable />;

const uploader = Uploader({ apiKey: "free" });

const FileUpload = () => (
  <div className="custom-btn">
    <UploadButton
      uploader={uploader}
      options={{ multi: true }}
      onComplete={(files) => console.log(files)}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file</button>}
    </UploadButton>
  </div>
);

const MainPage = () => {
  return (
    <Container className="pt-5">
      <Form>
        <Stack gap={4}>
          <Form.Group controlId="formRequestTitle">
            <Form.Label>Request Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>

          <Row>
            <Col className="col-12 col-md-4 col-sm-6">
              <Form.Group controlId="formRequestSelect">
                <Form.Label>Team</Form.Label>
                <SearchableSelect />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4 col-sm-6">
              <Form.Group controlId="formRequestSelect">
                <Form.Label>Type of Service</Form.Label>
                <SearchableSelect />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4 col-sm-12">
              <Form.Group controlId="formRequestSelect">
                <Form.Label>Name of Service</Form.Label>
                <SearchableSelect />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formFileUpload">
            {/* <Form.Label>Upload File</Form.Label> */}
            <FileUpload />
          </Form.Group>

          <Form.Group controlId="formRequestTextarea">
            <Form.Label>Request Details</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
          <div className="custom-btn">
            <button type="submit">Submit form</button>
          </div>
        </Stack>
      </Form>
    </Container>
  );
};

export default MainPage;
