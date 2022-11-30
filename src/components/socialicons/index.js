import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTwitch,
  FaReddit,
} from "react-icons/fa";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href="https://github.com/knlrvr"> 
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kane-lariviere">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/knlrvr">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://reddit.com/user/westparksad">
            <FaReddit />
          </a>
        </li>
        <li>
          <a href="https://twitch.com/kanolariv">
            <FaTwitch />
          </a>
        </li>
      </ul>
    </div>
  );
};
