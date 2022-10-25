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
          <ul class="cards">
            <li class="cards-item">
              <div class="card">
                <div class="card-image">
                  <img src={require('../../images/vault-tec.png')} />
                </div>
                <div class="card-content">
                  <div class="card-title">
                    Vault-Tec Industries
                  </div>
                  <p class="card-text">
                  If Vault-Tec was real, existed in 2022, and 
                  hired me to make a "simple" and "modern" 
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
            <li class="cards-item">
              <div class="card">
                <div class="card-image">
                  <img src={require('../../images/ferd.png')} />
                </div>
                <div class="card-content">
                  <div class="card-title">
                    Ferd Company
                  </div>
                  <p class="card-text">
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
            <li class="cards-item">
              <div class="card">
                <div class="card-image">
                  <img src={require('../../images/kl.png')} />
                </div>
                <div class="card-content">
                  <div class="card-title">
                    My Personal Portfolio
                  </div>
                  <p class="card-text">
                    Where you are now!
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/Portfolio">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/Portfolio/">
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