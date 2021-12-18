import React from "react";
import { Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEdit,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import Ruby from "react-devicon/ruby/original";

function About() {
  const rubybar = 60;
  return (
    <div className="container animate__animated animate__fadeInRight ">
      <div className="row">
        <div className="col col-md-4 p-5 border-end shadow position-sticky top-0 start-0">
          <h3 className="">About Me</h3>
          <code className="text-dark text-sm-center my-3">
            I enjoy creating things that solve problems. I am a full-stack
            developer with a passion for building things
          </code>
          <h5 className="mt-4">What I can offer</h5>
          <code className="text-dark ">
          <h5>
              <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>Back-end web
              development
            </h5>
            <p>
              I use back-end frameworks to build web applications. I am familiar with, <strong>Object Oriented Programming, MVC design patterns</strong> and <strong> RESTful APIs</strong>.
            </p>
            <h5>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>Front-end web
              development
            </h5>
            <p>
              I have experience building websites using HTML, CSS, and JavaScript.
              I am familiar with React.js.<br />
              <strong>My current experience and skills in front-end are</strong>
              <ul>
                <li>Intergrating external Rest APIs in the front-end</li>
                <li>Translating UX designers, analysts and graphic artists work into a reliable web design </li>
                <li>Full integration of tools like webpack</li>
              </ul>
            </p>
          </code>
        </div>
        <div className="col shadow border-end border-start col-sm-12 col-md-8 p-5 mb-3">
          <h4 className="mb-3">
            Here are a few technologies I’ve been working with recently
          </h4>
          <code>
            <div className="flex align-items-center flex-column align-content-between flex-nowrap">
              
              <h4 className="text-dark y-3">Front-end</h4>
              <div className="d-flex flex-row justify-content-around  border-bottom p-5">
                <a
                  href="https://reactjs.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <FontAwesomeIcon
                        icon={faReact}
                        size="4x"
                      ></FontAwesomeIcon>
                    </span>
                    <span className="text-dark">React</span>
                  </div>
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/HTML5"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <FontAwesomeIcon
                        icon={faHtml5}
                        size="4x"
                      ></FontAwesomeIcon>
                    </span>
                    <span className="text-dark">HTML 5</span>
                  </div>
                </a>
                <a
                  href="https://en.wikipedia.org/wiki/CSS3"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <FontAwesomeIcon
                        icon={faCss3}
                        size="4x"
                      ></FontAwesomeIcon>
                    </span>
                    <span className="text-dark">CSS 3</span>
                  </div>
                </a>
                <a
                  href="https://getbootstrap.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        size="4x"
                      ></FontAwesomeIcon>
                    </span>
                    <span className="text-dark">Bootstrap</span>
                  </div>
                </a>
              </div>
              
              <h4 className="text-dark my-3">Back-end</h4>
              <div className="d-flex flex-row justify-content-around border-bottom p-5">
                <a
                  href="https://rubyonrails.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-rails-plain"></i>
                    </span>
                    <span className="text-dark">Ruby on Rails</span>
                  </div>
                </a>
                <a
                  href="https://nestjs.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <i class="devicon-laravel-plain"></i>
                    </span>
                    <span className="text-dark">PHP Laravel</span>
                  </div>
                </a>
                <a
                  href="https://nestjs.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <i class="devicon-nestjs-plain"></i>
                    </span>
                    <span className="text-dark">Nest.js</span>
                  </div>
                </a>
                <a
                  href="https://expressjs.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <i class="devicon-express-original"></i>
                    </span>
                    <span className="text-dark">Express.js</span>
                  </div>
                </a>
              </div>

             
              <h4 className="text-dark my-3">Databases</h4>
              <div className="d-flex flex-row justify-content-around border-bottom p-5">
                <a
                  href="https://www.postgresql.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-postgresql-plain"></i>
                    </span>
                    <span className="text-dark">PostgreSQL</span>
                  </div>
                </a>
                <a
                  href="https://www.mysql.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-mysql-plain"></i>
                    </span>
                    <span className="text-dark">MySQL</span>
                  </div>
                </a>
              </div>
             
              <h4 className="text-dark my-3">Testing</h4>
              <div className="d-flex flex-row justify-content-evenly border-bottom p-5">
                <a
                  href="https://jestjs.io/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                    <i class="devicon-jest-plain"></i>
                    </span>
                    <span className="text-dark">Jest</span>
                  </div>
                </a>
                <a 
                  href="" 
                  className="about-links"
                  href="https://mochajs.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"  >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                    <i class="devicon-mocha-plain"></i>
                    </span>
                    <span className="text-dark">Mocha</span>
                  </div>
                  </a>
                  <a 
                  href="" 
                  className="about-links"
                  href="https://rspec.info/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"  >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                    
                    </span>
                    <span className="text-dark">Rspec</span>
                  </div>
                  </a>
              </div>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
}

export default About;
