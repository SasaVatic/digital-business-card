import React from "react";
import imgUrl from "../assets/img/profile-img.png";

export default function Info() {
  return (
    <div className="card-info">
      <img
        src={imgUrl}
        alt="profile image of developer sitting in the chair"
        className="card-img"
      />
      <div className="card-info-wrapper">
        <h3 className="card-heading">Saša Vatić</h3>
        <h4 className="card-subheading">Frontend Developer</h4>
        <a href="https://github.com/SasaVatic" className="card-link">
          sasavatic.website
        </a>
        <div className="card-btn-box">
          <a
            href="mailto:sashavatic@gmail.com"
            className="card-btn card-btn-email"
          >
            <i className="fa-solid fa-envelope"></i> Email
          </a>
          <a
            href="https://www.linkedin.com/in/sasa-vatic/"
            className="card-btn card-btn-linkedin"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
