import { useState } from "react";
import { Row, Form } from "react-bootstrap";
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

const SystemInfo = () => {
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
      <h2>System Information </h2>
      Organization Validation Status
      <Form.Group controlId="formRequestSelect">
        <Form.Label>Organization Status</Form.Label>
        <SearchableSelect
          value={team}
          onChange={(option) => setTeam(option as Option)}
        />
      </Form.Group>
    </Row>
  );
};

export default SystemInfo;
