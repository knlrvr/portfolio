import React from "react"; 
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import resume from "../../documents/Kane-Lariviere.pdf"; 

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kane Lariviere</title>
          <meta name="description" content="Hello! I'm Kane Lariviere, a web developer based in Charlotte, NC. This is my portfolio!" />
        </Helmet>
        <div className="intro_sec d-lg-flex align-items-center ">
          <div className="text d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro text-center">
                <h2 className="mb-1x">Kane Lariviere</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        'Software Engineer',
                        'Full Stack Developer',
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
                    <div id="button_s" className="ac_btn btn ">
                      Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link> 
                  <Link to="/contact">
                    <div id="button_s" className="ac_btn btn">
                      Contact
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <div id="button_r" className="ac_btn btn">
                  <a href={resume} target="_blank" 
                     rel="noreferrer">
                     Resume <FaAngleRight />
                  </a>
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
