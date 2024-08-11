import { Form, Container, Stack } from "react-bootstrap";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Selects, { Option, options } from "./Select";
import Upload from "./Upload";
import Title from "./Title";
import Detail from "./Detail";

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
          <Title
            title={title}
            titleClass={titleClass}
            setTitle={setTitle}
            setTitleClass={setTitleClass}
          />

          <Selects
            team={team}
            setTeam={setTeam}
            serviceType={serviceType}
            setServiceType={setServiceType}
            serviceName={serviceName}
            setServiceName={setServiceName}
          />

          <Upload setUploadedFiles={setUploadedFiles} />

          <Detail
            detailClass={detailClass}
            details={details}
            setDetailClass={setDetailClass}
            setDetails={setDetails}
          />
          <div className="custom-btn">
            <button type="submit">Submit form</button>
          </div>
        </Stack>
      </Form>
    </Container>
  );
};

export default MainPage;
