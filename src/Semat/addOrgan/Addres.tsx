import { MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { Row, Form, Stack } from "react-bootstrap";
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

const Addres = () => {
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
      <Stack gap={4}>
        <h2>Address </h2>
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Province Name</Form.Label>
          <SearchableSelect
            value={team}
            onChange={(option) => setTeam(option as Option)}
          />
        </Form.Group>
        <Form.Group controlId="formRequestSelect">
          <Form.Label>city Name</Form.Label>
          <SearchableSelect
            value={team}
            onChange={(option) => setTeam(option as Option)}
          />
        </Form.Group>
        <MDBInput
          wrapperClass="mb-4"
          label="Organization’s Persian Address"
          id="formControlLg1"
          type="text"
          size="lg"
        />
      </Stack>
    </Row>
  );
};

export default Addres;
