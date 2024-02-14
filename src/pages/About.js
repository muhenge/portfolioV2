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
  return (
    <div className="animate__animated animate__fadeInRight ">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-12 p-md-5  position-md-sticky top-0 start-0">
          <h3 className="">About Me</h3>
          <code className="text-dark text-sm-center my-3">
            I derive satisfaction from crafting solutions to complex problems.
            As an experienced full-stack developer, I am primarily engaged in
            backend development at present.
          </code>
          <h5 className="mt-4">What I Offer</h5>
          <code className="text-dark ">
            <h5>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="mx-3"
              ></FontAwesomeIcon>
              as a Back-end web developer
            </h5>
            <p>
              I specialize in utilizing robust frameworks like{" "}
              <strong>Ruby on Rails</strong>, <strong>PHP Laravel</strong> and{" "}
              <strong>Node.js Frameworks like Express.js and Nestjs</strong>
            </p>
            <h5>
              <FontAwesomeIcon icon={faEdit} className="mx-3"></FontAwesomeIcon>{" "}
              as a Front-end web developer
            </h5>
            <p>
              For frontend development, I excel in harnessing the power of{" "}
              <strong>React.js</strong> to create intuitive user interfaces. I
              integrate frontend components with backend systems seamlessly,
              utilizing tools like Redux.js and Tanstack React query to manage
              state effectively. Additionally, I prioritize delivering visually
              appealing and responsive applications that offer an exceptional
              user experience across various devices.
            </p>
          </code>
        </div>
        <div className="col-12 col-md-6 col-sm-12 border-start p-5 mb-3 top-stick opacity-100 index-top">
          <h4 className="mb-3">
            Here are a few technologies I’ve been working with recently
          </h4>
          <code>
            <div className="flex align-items-center flex-column align-content-between flex-nowrap">
              <h4 className="text-dark  my-3">Languages</h4>
              <div className="d-flex flex-row justify-content-around  border-bottom p-5">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-javascript-plain colored"></i>
                    </span>
                    <span className="text-dark">Javascript</span>
                  </div>
                </a>
                <a
                  href="https://www.ruby-lang.org/en/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-ruby-plain colored"></i>
                    </span>
                    <span className="text-dark">Ruby</span>
                  </div>
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-typescript-plain colored"></i>
                    </span>
                    <span className="text-dark">TypeScript</span>
                  </div>
                </a>
              </div>
              <h4 className="text-dark my-3">Front-end</h4>
              <div className="d-flex flex-row justify-content-around  border-bottom p-5">
                <a
                  href="https://reactjs.org/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-react-original colored"></i>
                    </span>
                    <span className="text-dark">React</span>
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
                      <i class="devicon-rails-plain colored"></i>
                    </span>
                    <span className="text-dark">Ruby on Rails</span>
                  </div>
                </a>
                <a
                  href="https://laravel.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                      <i class="devicon-laravel-plain colored"></i>
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
                      <i class="devicon-nestjs-plain colored"></i>
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
                      <i class="devicon-express-original colored"></i>
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
                      <i class="devicon-postgresql-plain colored"></i>
                    </span>
                    <span className="text-dark">PostgreSQL</span>
                  </div>
                </a>
                <a
                  href="https://www.mongodb.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-mongodb-plain colored"></i>
                    </span>
                    <span className="text-dark">MongoDB</span>
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
                      <i class="devicon-mysql-plain colored"></i>
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
                      <i class="devicon-jest-plain colored"></i>
                    </span>
                    <span className="text-dark">Jest</span>
                  </div>
                </a>
                <a
                  className="about-links"
                  href="https://mochajs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-mocha-plain colored"></i>
                    </span>
                    <span className="text-dark">Mocha</span>
                  </div>
                </a>
                <a
                  className="about-links"
                  href="https://rspec.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span></span>
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
