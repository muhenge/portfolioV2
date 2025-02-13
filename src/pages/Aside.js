import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  faHome,
  faAddressCard,
  faLaptopCode,
  faEnvelope,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitlab,
  faWhatsapp,
  faFile
} from "@fortawesome/free-brands-svg-icons";
import "./Styles/aside.css";
import "./Styles/about.css";
import classes from "./Aside.module.css";
import me from "./image/me.jpg";
export default function Aside() {
  return (
    <>
      <div className="col col-xl-2 px-sm-2 border-end px-0 bg-light animate__animated animate__fadeInLeft position-sticky top-0 start-0 vh-100 bg-blur index-before">
        <div class="d-flex flex-column align-items-center align-content-between align-items-sm-start px-3 pt-2 text-white position-sticky start-0 top-0 vh-100">
          <NavLink
            to="/"
            class="d-flex align-items-center pb-3 mb-md-0 pb-3 menu me-md-auto text-dark text-decoration-none"
          >
            <img
              src={me}
              alt="me"
              className="img-thumbnail"
            />

            
          </NavLink>{" "}
          <hr />
          <ul class="nav nav-pills flex-column" id="menu">
            <li className="nav-item border border-3 menu w-100 mb-4">
              <Link to="/about" class="nav-link text-dark link">
                <FontAwesomeIcon icon={faAddressCard}> </FontAwesomeIcon>{" "}
                <span class="ms-1 d-none d-sm-inline"> Me & Skills </span>{" "}
              </Link>{" "}
            </li>{" "}
            {/* <li className="nav-item nav-item border border-3 w-100 mb-4">
                                                                                                                        <Link to="/projects" class="nav-link text-dark link">
                                                                                                                        <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon> <span class="ms-1 d-none d-sm-inline">Side Projects</span>
                                                                                                                        </Link>
                                                                                                                    </li> */}{" "}
          </ul>{" "}
          <h3 className="text-dark d-none d-md-block"> Get in touch </h3>{" "}
          <div>
            <a
              href="https://www.linkedin.com/in/mugunga-herve-a62a0ab9/"
              className="my-2  btn-block text-center d-flex align-items-center about-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-linkedin-plain colored"> </i>{" "}
              <span class="ms-1 d-none d-sm-inline"> LinkedIn </span>{" "}
            </a>{" "}
          </div>{" "}
          <div>
            <a
              href="https://github.com/muhenge"
              className="my-2  btn-block text-center d-flex align-items-center about-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-github-original colored"> </i>{" "}
              <span class="ms-1 d-none d-sm-inline"> GitHub </span>{" "}
            </a>{" "}
          </div>{" "}
          <div>
            <a
              href="https://gitlab.com/Herveee"
              className="my-2  btn-block text-center d-flex align-items-center about-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="devicon-gitlab-plain colored"> </i>{" "}
              <span class="ms-1 d-none d-sm-inline"> GitLab </span>{" "}
            </a>{" "}
          </div>{" "}
          <div>
            <a
              href="mailto:ngenziherve1@gmail.com"
              className="my-2  btn-block text-center d-flex align-items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x">
                {" "}
              </FontAwesomeIcon>{" "}
              <span class="ms-1 d-none d-sm-inline"> email </span>{" "}
            </a>{" "}
          </div>{" "}
          <div>
            <a
              href="https://drive.google.com/file/d/11T2TNnizwuqC-kjudDA7uyqQ-2aL-rVJ/view?usp=drive_link"
              className="my-2  btn-block text-center d-flex align-items-center about-links"
              target="_blank"
              rel="noopener noreferrer"
            >
               <FontAwesomeIcon icon={faFileContract} size="2x">
                {" "}
              </FontAwesomeIcon>{" "}
              <span class="ms-1 d-none d-sm-inline"> My resume </span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
