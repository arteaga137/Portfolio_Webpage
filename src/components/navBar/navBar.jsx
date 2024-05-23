import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
// if needed, you need to import the logo and navigation icons svgs.

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  // this will help me detect and change the state of the navbar when scrolling
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // if it detects that the vertical scrolling is more than 50 it will set the scrolled variable to True
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Adds an event listener to detect scroll so I can pass it as a parameter to the onScroll function above
    window.addEventListener("scroll", onScroll);
    // removes the event listener when the event gets removed from the DOM
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={"#"} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={"navIcon1"} alt="" />
              </a>
              <a href="#">
                <img src={"navIcon2"} alt="" />
              </a>
              <a href="#">
                <img src={"navIcon3"} alt="" />
              </a>
            </div>

              <button className="vvd">
                <span>Let’s Connect</span>
              </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
