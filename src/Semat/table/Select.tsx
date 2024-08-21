import { useState, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import Select, { SingleValue } from "react-select";
import axiosInstance from "../axiosInstance";

const urlSelect = "Default/enums-detail";

interface Option {
  value: number;
  label: string;
}

interface SelectsProps {
  onTeamChange: (value: number) => void;
  onServiceTypeChange: (value: number) => void;
  onParentOrgChange: (value: number) => void;
  onApplyFilters: () => void;
}

const Selects = ({
  onTeamChange,
  onServiceTypeChange,
  onParentOrgChange,
  onApplyFilters,
}: SelectsProps) => {
  const [team, setTeam] = useState<Option | null>(null);
  const [serviceType, setServiceType] = useState<Option | null>(null);
  const [parentOrg, setParentOrg] = useState<Option | null>(null);

  const [teamOptions, setTeamOptions] = useState<Option[]>([]);
  const [serviceTypeOptions, setServiceTypeOptions] = useState<Option[]>([]);
  const [parentOrgOptions, setParentOrgOptions] = useState<Option[]>([]);

  useEffect(() => {
    // Initial requests
    axiosInstance
      .get(`${urlSelect}?page=61&appName=OrgValidationStatus`)
      .then((response) => {
        const options = response.data.content.map((item: any) => ({
          value: item.ParamCode,
          label: item.ParamValue,
        }));
        console.log("OrgValidationStatus data:", options);
        setTeamOptions(options);
        setTeam(options[0]);
        onTeamChange(options[0].value);
      })
      .catch((error) =>
        console.error("Error fetching OrgValidationStatus data:", error)
      );

    axiosInstance
      .get(`${urlSelect}?page=61&appName=InstitutionStatus`)
      .then((response) => {
        const options = response.data.content.map((item: any) => ({
          value: item.ParamCode,
          label: item.ParamValue,
        }));
        console.log("InstitutionStatus data:", options);
        setServiceTypeOptions(options);
        setServiceType(options[0]);
        onServiceTypeChange(options[0].value);
      })
      .catch((error) =>
        console.error("Error fetching InstitutionStatus data:", error)
      );

    axiosInstance
      .get(`${urlSelect}?page=61&appName=ParentOrg`)
      .then((response) => {
        const options = response.data.content.map((item: any) => ({
          value: item.ParamCode,
          label: item.ParamValue,
        }));
        console.log("ParentOrg data:", options);
        setParentOrgOptions(options);
        setParentOrg(options[0]);
        onParentOrgChange(options[0].value);
      })
      .catch((error) => console.error("Error fetching ParentOrg data:", error));
  }, []);

  const handleTeamChange = (option: SingleValue<Option>) => {
    setTeam(option as Option);
    onTeamChange(option?.value || 0);
  };

  const handleServiceTypeChange = (option: SingleValue<Option>) => {
    setServiceType(option as Option);
    onServiceTypeChange(option?.value || 0);
  };

  const handleParentOrgChange = (option: SingleValue<Option>) => {
    setParentOrg(option as Option);
    onParentOrgChange(option?.value || 0);
  };

  const SearchableSelect = ({
    value,
    onChange,
    options,
  }: {
    value: Option | null;
    onChange: (option: SingleValue<Option>) => void;
    options: Option[];
  }) => (
    <Select options={options} isSearchable value={value} onChange={onChange} />
  );

  return (
    <>
      <Col className="col-12 col-md-4 col-sm-6">
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Confirmation of Organization</Form.Label>
          <SearchableSelect
            value={team}
            onChange={handleTeamChange}
            options={teamOptions}
          />
        </Form.Group>
      </Col>
      <Col className="col-12 col-md-4 col-sm-6">
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Type of Service</Form.Label>
          <SearchableSelect
            value={serviceType}
            onChange={handleServiceTypeChange}
            options={serviceTypeOptions}
          />
        </Form.Group>
      </Col>
      <Col className="col-12 col-md-4 col-sm-12">
        <Form.Group controlId="formRequestSelect">
          <Form.Label>Parent Organization</Form.Label>
          <SearchableSelect
            value={parentOrg}
            onChange={handleParentOrgChange}
            options={parentOrgOptions}
          />
        </Form.Group>
      </Col>
      <Col className="col-12 col-md-4 col-sm-12">
        <Button onClick={onApplyFilters}>Apply Filters</Button>
      </Col>
    </>
  );
};

export default Selects;
