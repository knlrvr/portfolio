import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | Kane Lariviere </title>
          <meta name="description" content="About | Kane Lariviere" />
        </Helmet>
        <Row className="mb-5 mt-3 mx-1">
          <Col lg="12">
            <h1 className="display-4 mb-4 text-center">About</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-2 text-end">Bio</h3>
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <div>
              <p>
              Hello! My name is <strong>Kane Lariviere</strong>. I'm a
              software engineer based in Charlotte, North Carolina. 
              My primary focus is on front end development and design. 
              However, I do have an understanding of back end, as well
              as full stack development. 
              <p></p>
              I love to create things. Anything. I love to see things through 
              from concept to deployment, with a fierce passion for each step of
              the process. 
              <p></p>
              When I'm not building and designing while slouched over my computer, 
              I love to play video games, make music, and spend time with my
              family, all while complaining about my neck and back pain. 
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-2 text-end">Work</h3>
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <div>
              <p>
                Front End Developer, <strong>Freelance</strong>, <em>2021 - Present</em>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-2 text-end">Education</h3>
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <div>
              <p>
                AS., <strong>Applications Development</strong>, Gaston College, <em>2022</em>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
