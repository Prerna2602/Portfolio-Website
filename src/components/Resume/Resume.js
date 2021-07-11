import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/PrernaKumari_Resume.pdf";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px",fontFamily:"Georgia, 'Times New Roman', Times, serif" }}>
               My <strong className="purple">Resume</strong> 
            </h1>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Summer Intern at Tata Steel"
              date="May 2020 - June 2020"
              content={[
                "Made a static web page named Sinter Plant Digital Twin using AngularJS",
              ]}
            />

             <Resumecontent
              title="Winter Intern at HighRadius"
              date="Janurary 2021 - March 2021"
              content={[
                "Made a full stack project for Sales Order Management System using ReactJS, ML and java"
               
              ]}
            />
             <Resumecontent
              title="Summer Intern at HighRadius"
              date="June 2021 - Ongoing"
              content={[
                "Working on FrontEnd technology using Extjs.",
                "Working on Backend using Spring and Hibernate"
               
              ]}
            />

            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech | KIIT University Bhubaneswar"
              date="2018 - Present"
              content={[`CGPA: 9.02 (Till 6th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD | St. Mary English High School"
              date="2016 - 2018"
              content={[]}
            />
            <Resumecontent
              title="10TH BOARD | Church School Beldih "
              date="2016"
              content={[]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Best Artist Winner in School",
                "Won Several Dance Competitions"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
