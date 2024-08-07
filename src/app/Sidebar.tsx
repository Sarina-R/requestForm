import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Sidebar = () => {
  return (
    <MDBFooter className="bg-light text-center text-white pt-5">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            target="_blank"
            href="https://github.com/Sarina-R"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a
          className="text-white"
          target="_blank"
          href="https://mdbootstrap.com/"
        >
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Sidebar;
