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
          <title> Portfolio | Kane Lariviere </title>
          <meta name="description" content="Portfolio | Kane Lariviere" />
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
                  <img src={require('../../images/port.png')} alt="me"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    My Personal Portfolio
                  </div>
                  <p className="card-text-2">
                    React | React Boostrap | React Icons | Typewriter
                  </p>
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
                  </div>
                </div>
              </div>
            </li>
            <li className="cards-item">
              <div className="card">
                <div className="card-image">
                  <img src={require('../../images/ferd.png')} alt="APIYP"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    Ferd Company
                  </div>
                  <p className="card-text-2">
                    React | Redux | Styled Components
                  </p>
                  <p className="card-text">
                    A Tesla website clone, remade to represent
                    Ferd (Ford).
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/ferd/">
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
                  <img src={require('../../images/rest.png')} alt="Ferd"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    Rest Countries API
                  </div>
                  <p className="card-text-2">
                    HTML | CSS | JavaScript
                  </p>
                  <p className="card-text">
                  My REST Countries API Solution. 
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/REST-Countries">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/REST-Countries/">
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
                  <img src={require('../../images/todo.png')} alt="Ferd"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    To Do App
                  </div>
                  <p className="card-text-2">
                    HTML | CSS | JavaScript
                  </p>
                  <p className="card-text">
                  A to do app that uses local storage to save your name (user) and
                  the tasks you add. Color codes and categorizes your tasks based
                  on input. 
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/to-do">
                      <div id="button_p" className="ac_btn btn">
                        View Code
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="https://knlrvr.github.io/to-do/">
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
                  <img src={require('../../images/vt.png')} alt="APIYP"/>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    Vault-Tec Industries
                  </div>
                  <p className="card-text-2">
                    React | Framer Motion | CSS 
                  </p>
                  <p className="card-text">
                    A website for a fictional yet still very nefarious 
                    company, Vault-Tec, which is based in the Fallout 
                    game series. This site is simple and to the point, 
                    unlike the company it represents. 
                  </p>
                  <div className="btn-group">
                    <a href="https://github.com/knlrvr/vault-tec/">
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
          </ul>
        </section>
      </Container>
    </HelmetProvider> 
  );
};