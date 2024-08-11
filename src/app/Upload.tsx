import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { Form } from "react-bootstrap";

const uploader = Uploader({ apiKey: "free" });

interface FileUploaderProps {
  onFileUpload: (files: any[]) => void;
}

const FileUpload: React.FC<FileUploaderProps> = ({ onFileUpload }) => (
  <div className="custom-btn">
    <UploadButton
      uploader={uploader}
      options={{ multi: true, maxFileSizeBytes: 5 * 1024 * 1024 }}
      onComplete={onFileUpload}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file</button>}
    </UploadButton>
  </div>
);

interface UploadProps {
  setUploadedFiles: (files: any[]) => void;
}

const Upload: React.FC<UploadProps> = ({ setUploadedFiles }) => {
  const handleFileUpload = (files: any[]) => {
    setUploadedFiles(files);
  };
  return (
    <Form.Group controlId="formFileUpload">
      <FileUpload onFileUpload={handleFileUpload} />
    </Form.Group>
  );
};

export default Upload;
