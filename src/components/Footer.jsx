import React from "react";
import FrontendMentorIcon from "../assets/icons/FrontendMentorIcon";

export default function Footer() {
  return (
    <footer className="card-footer">
      <a href="https://twitter.com/SaaV59345676">
        <i className="fa-brands fa-square-twitter"></i>
      </a>
      <a href="https://codepen.io/SabijaThor">
        <i className="fa-brands fa-codepen"></i>
      </a>
      <a href="https://www.frontendmentor.io/profile/SasaVatic">
        <FrontendMentorIcon />
      </a>
      <a href="https://github.com/SasaVatic">
        <i className="fa-brands fa-square-github"></i>
      </a>
    </footer>
  );
}
