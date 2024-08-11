import { Form, Row, Col } from "react-bootstrap";
import Select, { SingleValue } from "react-select";

export interface Option {
  value: string;
  label: string;
}

export const options: Option[] = [
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

interface SelectsProps {
  team: Option | null;
  setTeam: (option: Option | null) => void;
  serviceType: Option | null;
  setServiceType: (option: Option | null) => void;
  serviceName: Option | null;
  setServiceName: (option: Option | null) => void;
}

const Selects: React.FC<SelectsProps> = ({
  team,
  setTeam,
  serviceType,
  setServiceType,
  serviceName,
  setServiceName,
}) => {
  return (
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
  );
};

export default Selects;
