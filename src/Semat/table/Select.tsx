import { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import Select, { SingleValue } from "react-select";
import axiosInstance from "../axiosInstance";

const urlSelect = "Default/enums-detail";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
];

const Selects = () => {
  const [team, setTeam] = useState<Option | null>(options[0]);
  const [serviceType, setServiceType] = useState<Option | null>(options[0]);

  useEffect(() => {
    axiosInstance
      .get(urlSelect)
      .then((response) => {
        console.log("Fetched data:", response.data.content); // checking
        //   setCaptchaData(response.data.content);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  const SearchableSelect = ({
    value,
    onChange,
  }: {
    value: Option | null;
    onChange: (option: SingleValue<Option>) => void;
  }) => (
    <Select options={options} isSearchable value={value} onChange={onChange} />
  );

  return (
    <>
      <Col className="mt-3 col-12 col-sm-6">
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Team</Form.Label>
          <SearchableSelect
            value={team}
            onChange={(option) => setTeam(option as Option)}
          />
        </Form.Group>
      </Col>
      <Col className="mt-3 col-12 col-sm-6">
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Type of Service</Form.Label>
          <SearchableSelect
            value={serviceType}
            onChange={(option) => setServiceType(option as Option)}
          />
        </Form.Group>
      </Col>
    </>
  );
};

export default Selects;
