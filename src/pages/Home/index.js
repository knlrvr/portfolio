import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kane Lariviere</title>
          <meta name="description" content="Hello! I'm Kane Lariviere, a web developer based in Charlotte, NC. This is my portfolio!x" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621975081039-c814938ea869)' }}></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto text-center">
                <h2 className="mb-1x">Kane Lariviere</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        'Web Developer',
                        'UI/UX Designer',
                        'Artist'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 15,
                    }}
                  />
                </h1>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio">
                    <div id="button_p" className="ac_btn btn ">
                      Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
