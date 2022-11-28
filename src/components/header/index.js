import React, { useState } from "react";
import "./style.css";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Themetoggle from "../themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            / K N L R V R
          </Link>
          <div className="d-flex">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscChromeClose /> : <VscMenu />}
          </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opened" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu text-center">
                  <li className="menu_item">
                  <Link  onClick={handleToggle} to="/" className="my-4">Home</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-4">About</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-4"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-4">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href="https://github.com/knlrvr">Github</a>
            <a href="https://linkedin.com/in/kane-lariviere">LinkedIn</a>
            <a href="https://twitter.com/kanelariviere_">Twitter</a>
            </div>
            <p className="copyright m-0"> &copy; 2022 Kane Lariviere </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
