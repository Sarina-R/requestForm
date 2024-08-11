import { Form } from "react-bootstrap";
import { ChangeEvent } from "react";

interface DetailProp {
  setDetails: (value: string) => void;
  setDetailClass: (value: string) => void;
  details: string;
  detailClass: string;
}

const Detail: React.FC<DetailProp> = ({
  setDetails,
  setDetailClass,
  details,
  detailClass,
}) => {
  const handleDetailChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDetails(value);
    if (value.length < 10 || value.length > 1000) {
      setDetailClass("is-invalid");
    } else {
      setDetailClass("is-valid");
    }
  };

  return (
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
  );
};

export default Detail;
