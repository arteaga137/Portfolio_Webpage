import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: prokImg1,
    },
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: prokImg2,
    },
    {
      title: "Car Rental Web App",
      description: "Design & Development",
      imgUrl: prokImg3,
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
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <p>{project.title}</p>
                                )

                            })
                            
                        }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second Pane Placeholder </Tab.Pane>
                    <Tab.Pane eventKey="third">Third Pane Placeholder </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
            </Col>
        </Row>
    </Container>
   </section>
    
  ) 
}

export default Projects;
