import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../app/Header";
import Sidebar from "../app/Sidebar";
import { useEffect, useState } from "react";

interface FormData {
  id: string;
  title: string;
  details: string;
  team: { value: string; label: string };
  serviceName: { value: string; label: string };
  serviceType: { value: string; label: string };
  uploadedFiles: any[];
}

const RequestPage = () => {
  const location = useLocation();

  const { formData } = location.state || {};

  const [requests, setRequest] = useState<FormData[]>([]);

  useEffect(() => {
    if (formData) {
      setRequest((prev) => [...prev, formData]);
    }
  }, [formData]);

  return (
    <>
      <Header />
      {requests.length === 0 ? (
        <p>No form data available</p>
      ) : (
        requests.map((request) => (
          <Container key={request.id} className="p-4 card mt-2">
            <h1 className="pb-4">
              Request ID:<span className="id">{request.id}</span>{" "}
            </h1>
            <p>
              <strong>Title:</strong> {request.title}
            </p>
            <p>
              <strong>Details:</strong> {request.details}
            </p>
            <p>
              <strong>Team:</strong> {request.team.label}
            </p>
            <p>
              <strong>Type of Service:</strong> {request.serviceType.label}
            </p>
            <p>
              <strong>Name of Service:</strong> {request.serviceName.label}
            </p>
            <Row>
              <strong className="col-12">Uploaded Files:</strong>
              <img
                className="col-12"
                src={request.uploadedFiles
                  .map((file: any) => file.fileUrl)
                  .join(", ")}
              />
            </Row>
          </Container>
        ))
      )}
      <Sidebar />
    </>
  );
};

export default RequestPage;
