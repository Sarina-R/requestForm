import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar
          key={index}
          expand={expand}
          className="bg-body-tertiary mb-3 nav-l "
        >
          <Container fluid>
            <Link to="/requestForm/">
              <Navbar.Brand className="page-title fw-bold">
                Request Page
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <FaHamburger className="ham-i" />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/requestForm/login">
                    <div className="link">
                      <a className="text-gray">Profile</a>
                    </div>
                  </Link>
                  <Link to="/requestForm/requests">
                    <div className="link">
                      <a className="text-gray">Request Management</a>
                    </div>
                  </Link>
                  {/* <Link to="/requestForm/semat/login">
                    <div className="link">
                      <a className="text-gray">Semat Login</a>
                    </div>
                  </Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Navbar collapseOnSelect expand="lg" className="nav-s header">
        <Link to="/requestForm">
          <Navbar.Brand className="p-4 page-title fw-bold">
            Request Page
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaHamburger className="ham-i" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto p-4">
            <Link to="/requestForm/login">
              <a>Profile</a>
            </Link>
            <Link to="/requestForm/requests">
              <a>Request Management</a>
            </Link>
            {/* <Link to="/requestForm/semat/login">
              <a>Semat Login</a>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
