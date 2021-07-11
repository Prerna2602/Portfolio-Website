import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/prerna_port.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        
          <p style={{ textAlign: "center",marginLeft:"10px" }}>
            Hello there, I am <span className="purple">Prerna Kumari </span>
            a final year  <span className="purple"> B.Tech Student</span>
            <Col md={6} style={{ padding: 10 ,marginLeft:"110px"}}>
          <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
            <br />I am currently pursuing my B.Tech from KIIT University Bhubaneswar in Computer Engineering
            <br />
            <br />
            I am much intrested in web development
            <br/>
            <br/>
            I'm also intrested in many activities like painting and dance.

            <br/>
            <br/>
            To know more about me visit my resume.
            <br/>
            <br/>
            <Link to="/resume">
      <button className="btn btn-primary" ><i className="cil-external-link">&nbsp;</i>My Resume</button>
      </Link>

        
            
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
