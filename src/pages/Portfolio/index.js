import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | Kane Lariviere </title>{" "}
          <meta name="description" content="..." />
        </Helmet>
        <Row className="mb-5 mt-3 mx-1">
          <Col lg="12">
            <h1 className="display-4 mb-4 text-center">Portfolio</h1>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};