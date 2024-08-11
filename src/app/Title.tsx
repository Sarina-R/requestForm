import { Form } from "react-bootstrap";
import { ChangeEvent } from "react";

interface TitleProp {
  setTitle: (value: string) => void;
  setTitleClass: (value: string) => void;
  title: string;
  titleClass: string;
}

const Title: React.FC<TitleProp> = ({
  setTitle,
  setTitleClass,
  title,
  titleClass,
}) => {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length < 3 || value.length > 10) {
      setTitleClass("is-invalid");
    } else {
      setTitleClass("is-valid");
    }
  };
  return (
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
  );
};

export default Title;
