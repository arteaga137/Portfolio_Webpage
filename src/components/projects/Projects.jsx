import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/images/color-sharp2.png"
import ProjectCard from "../projectCard/ProjectCard";
import projImg from "../../assets/images/LUXURY CAR RENTAL.jpeg"

function Projects() {
  const projects = [
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: projImg,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum...</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Developer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Lawyer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Photographer</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}>

                        </ProjectCard>
                      )
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second Pane Placeholder </Tab.Pane>
                <Tab.Pane eventKey="third">Third Pane Placeholder </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Projects;
