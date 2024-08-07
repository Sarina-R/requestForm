import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaHamburger } from "react-icons/fa";

function Header() {
  return (
    <>
      {[false].map((expand, index) => (
        <Navbar
          key={index}
          expand={expand}
          className="bg-body-tertiary mb-3 nav-l"
        >
          <Container fluid>
            <Navbar.Brand className="page-title fw-bold" href="#">
              Request Page
            </Navbar.Brand>

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
                  <Nav.Link href="/requestForm/login">Profile</Nav.Link>
                  <Nav.Link href="/requestForm/requests">
                    Request Management
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Navbar collapseOnSelect expand="lg" className="nav-s">
        <Navbar.Brand href="#" className="p-4 page-title fw-bold">
          Request Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaHamburger className="ham-i" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto p-4">
            <Nav.Link href="/requestForm/login">Profile</Nav.Link>

            <Nav.Link href="/requestForm/requests">Request Management</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
