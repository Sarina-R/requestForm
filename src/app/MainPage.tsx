import { Form, Container, Row, Col, Stack } from "react-bootstrap";
import Select, { SingleValue } from "react-select";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { ChangeEvent, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
];

const SearchableSelect = ({
  value,
  onChange,
}: {
  value: Option | null;
  onChange: (option: SingleValue<Option>) => void;
}) => (
  <Select options={options} isSearchable value={value} onChange={onChange} />
);

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
  const [team, setTeam] = useState<Option | null>(options[0]);
  const [serviceType, setServiceType] = useState<Option | null>(options[0]);
  const [serviceName, setServiceName] = useState<Option | null>(options[0]);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const navigate = useNavigate();

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
    setUploadedFiles(files);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !team ||
      !serviceType ||
      !serviceName ||
      !title ||
      !details ||
      titleClass === "is-invalid" ||
      detailClass === "is-invalid"
    ) {
      alert("Please complete all fields.");
      return;
    }
    const formData = {
      id: uuidv4(),
      title,
      details,
      team,
      serviceType,
      serviceName,
      uploadedFiles,
    };
    // console.log(formData);
    navigate("/requestForm/requests", { state: { formData } });
  };

  return (
    <Container className="pt-5">
      <Form onSubmit={handleSubmit}>
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
                <SearchableSelect
                  value={team}
                  onChange={(option) => setTeam(option as Option)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4 col-sm-6">
              <Form.Group controlId="formRequestSelect">
                <Form.Label>Type of Service</Form.Label>
                <SearchableSelect
                  value={serviceType}
                  onChange={(option) => setServiceType(option as Option)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4 col-sm-12">
              <Form.Group controlId="formRequestSelect">
                <Form.Label>Name of Service</Form.Label>
                <SearchableSelect
                  value={serviceName}
                  onChange={(option) => setServiceName(option as Option)}
                />
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
