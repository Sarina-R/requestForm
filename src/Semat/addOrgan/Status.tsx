import { Form, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Select, { SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
];

const Status = () => {
  const [team, setTeam] = useState<Option | null>(options[0]);

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
    <Row className="m-4">
      <h2>Organization Status </h2>
      <Form.Group controlId="formRequestSelect">
        <Form.Label>Organization Status</Form.Label>
        <SearchableSelect
          value={team}
          onChange={(option) => setTeam(option as Option)}
        />
        <Form.Group>
          <Form.Label>Organization Status</Form.Label>
          <Button className="m-2">Active</Button>
          <Button className="m-2">Disabled</Button>
        </Form.Group>

        <Form.Group>
          <Form.Label>Organization Management</Form.Label>
          <Button className="m-2">Private</Button>
          <Button className="m-2">Public</Button>
        </Form.Group>

        <Form.Group>
          <Form.Label>Organization Type</Form.Label>
          <Button className="m-2">Supervisory</Button>
          <Button className="m-2">Parent</Button>
          <Button className="m-2">Research</Button>
        </Form.Group>
      </Form.Group>
    </Row>
  );
};

export default Status;
