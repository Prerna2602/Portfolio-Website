import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import Type from "./Type";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                Hi Everyone
                <br/>
                <strong className="main-name"> I'M Prerna Kumari </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Link to="/about">
        <button className="btn btn-primary" style={{ marginBottom: "80px" }}>
        <i className="cil-external-link">&nbsp;</i>
          Know More
        </button>
      </Link>
    </section>
  );
}

export default Home;
