import { Form, Container, Row, Col, Stack } from "react-bootstrap";
import Select from "react-select";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { ChangeEvent, useState } from "react";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
];

const SearchableSelect = () => <Select options={options} isSearchable />;

const uploader = Uploader({ apiKey: "free" });

interface FileUploaderProps {
  onFileUpload: (files: any[]) => void;
}

const FileUpload: React.FC<FileUploaderProps> = ({ onFileUpload }) => (
  <div className="custom-btn">
    <UploadButton
      uploader={uploader}
      options={{ multi: true, maxFileSizeBytes: 5 * 1024 * 1024 }}
      onComplete={onFileUpload}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file</button>}
    </UploadButton>
  </div>
);

const MainPage = () => {
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [titleClass, setTitleClass] = useState<string>("");
  const [detailClass, setDetailClass] = useState<string>("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length < 3 || value.length > 10) {
      setTitleClass("is-invalid");
    } else {
      setTitleClass("is-valid");
    }
  };

  const handleDetailChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDetails(value);
    if (value.length < 10 || value.length > 1000) {
      setDetailClass("is-invalid");
    } else {
      setDetailClass("is-valid");
    }
  };

  const handleFileUpload = (files: any[]) => {
    console.log(files);
  };

  return (
    <Container className="pt-5">
      <Form>
        <Stack gap={4}>
          <Form.Group controlId="formRequestTitle">
            <Form.Label>Request Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter title"
              onChange={handleTitleChange}
              className={titleClass}
            />
            {titleClass === "is-invalid" ? (
              <div className="invalid-feedback">
                Title has to be more than 3 and less than 10 letters
              </div>
            ) : (
              <div className="valid-feedback">Looks good!</div>
            )}
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
            <FileUpload onFileUpload={handleFileUpload} />
          </Form.Group>

          <Form.Group controlId="formRequestTextarea">
            <Form.Label>Request Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              value={details}
              onChange={handleDetailChange}
              className={detailClass}
            />
            {detailClass === "is-invalid" ? (
              <div className="invalid-feedback">
                Message has to be more than 10 and less than 1000 letters
              </div>
            ) : (
              <div className="valid-feedback">Looks good!</div>
            )}
            <div className="pt-3">{details.length} / 1000</div>
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
