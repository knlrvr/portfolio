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
        <section className="portfolio">
          <ul className="cards">
            <li className="cards-item">
              <div className="card">
                <div className="card-image">
                  <img src={require('../../images/vault-tec.png')} alt="Vault-Tec"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    Vault-Tec Industries
                  </div>
                  <p className="card-text">
                  If Vault-Tec was real, existed in 2022, and 
                  hired me to make a "simple", "modern", and "responsive" 
                  website for them. Vault-Tec is a fictional
                  company within the Fallout game series. 
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/vault-tec">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/vault-tec/">
                      <div id="button_h" className="ac_btn btn">
                        View Live
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards-item">
              <div className="card">
                <div className="card-image">
                  <img src={require('../../images/ferd.png')} alt="Ferd"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    Ferd Company
                  </div>
                  <p className="card-text">
                  A responsive Tesla website clone redone to 
                  represent Ferd (Ford).
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/ferd">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/ferd/">
                      <div id="button_h" className="ac_btn btn">
                        View Live
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards-item">
              <div className="card">
                <div className="card-image">
                  <img src={require('../../images/APIYP.png')} alt="APIYP"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    A Peace In Your Pantry
                  </div>
                  <p className="card-text">
                    A responsive website built for a local
                    business in Winston-Salem. This website is 
                    strictly informational, but is fully
                    intended to support ordering online, sharing
                    relevant news, and showcasing seasonal and 
                    featured items. 
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/apiyp">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/apiyp">
                      <div id="button_h" className="ac_btn btn">
                        View Live
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards-item">
              <div className="card">
                <div className="card-image">
                  <img src={require('../../images/kl.png')} alt="me"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    My Personal Portfolio
                  </div>
                  <p className="card-text">
                    Where you are now!
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/portfolio">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/portfolio/">
                      <div id="button_h" className="ac_btn btn">
                        View Live
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </HelmetProvider> 
  );
};