import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            lg={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",fontFamily:"Georgia, 'Times New Roman', Times, serif" }}>
              More <strong className="purple">About</strong> Me
            </h1>
            
          </Col>
          <Aboutcard />
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillsets </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain" />
          <Techstack iconName="devicon-materialui-plain " />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-html5-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Techstack iconName="devicon-visualstudio-plain" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-heroku-plain" />
          <Techstack iconName="devicon-github-original" />
        </Row>
        
      </Container>
    </Container>
  );
}

export default About;
