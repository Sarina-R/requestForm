import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import { Button, Modal } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();

interface ModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  // setLogoutMessage: (message: string) => void;
}

const Logout = ({ modal, setModal }: ModalProps) => {
  const navigate = useNavigate();

  const [logoutMessage, setLogoutMessage] = useState<boolean>(false);

  const handleLogout = () => {
    cookies.remove("token", { path: "/" }); // Clear token
    axiosInstance.defaults.headers.common["Authorization"] = ""; // Clear authorization header
    setTimeout(() => {
      setLogoutMessage(false);
      navigate("/requestForm/semat/login");
    }, 5000);
  };

  return (
    <>
      {logoutMessage ? (
        <Modal
          show={logoutMessage}
          onHide={() => setLogoutMessage(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              You have been logged out successfully!
            </Modal.Title>
          </Modal.Header>
        </Modal>
      ) : (
        <Modal
          show={modal}
          onHide={() => setModal(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Are you sure you want to logout?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModal(false)}>
              No
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Logout;
