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
            
Sure, I can help you rephrase that. Here is a possible rephrasing:

I am a full-stack developer with a passion for <strong>solving problems</strong> and building great apps. I am proficient in a variety of <strong>backend</strong> and <strong>frontend</strong> technologies, including:
I am currently working as a backend developer, but I am also interested in frontend development.
          </code>
          <h5 className="mt-4">What I can offer</h5>
          <code className="text-dark ">
          <h5>
              <FontAwesomeIcon icon={faLaptopCode} className="mx-3"></FontAwesomeIcon>as a Back-end web
              developer
            </h5>
            <p>
              I use back-end frameworks like <strong>Ruby on Rails</strong>, <strong>PHP laravel</strong> or <strong>Nest.js</strong> to build RESTful API applications. <strong> MVC design patterns</strong>, ORM like <strong>Active Record</strong> and <strong>TypeORM</strong> to applications.
            </p>
            <h5>
              <FontAwesomeIcon icon={faEdit} className='mx-3'></FontAwesomeIcon> as a Front-end web
              developer
            </h5>
            <p>
              <strong>React.js</strong> and <strong>Vue.js</strong>.
              
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
                    <span className="text-dark">JavaScript DOM</span>
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
                    <i class="devicon-html5-plain colored"></i>
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
                    <i class="devicon-css3-plain colored"></i>
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
                    <i class="devicon-bootstrap-plain colored"></i>
                    </span>
                    <span className="text-dark">Bootstrap</span>
                  </div>
                </a>
                <a
                  href="https://tailwindcss.com/"
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark">
                    <span>
                    <i class="devicon-tailwindcss-plain colored"></i>
                    </span>
                    <span className="text-dark">tailwindcss</span>
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
                  className="about-links"
                  target="_blank"
                  rel="noopener noreferrer"  >
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
              <h4 className="text-dark my-3">OS</h4>
              <div className="d-flex flex-row justify-content-around border-bottom p-5">
                <a href="https://ubuntu.com/" className="about-links" target="_blank" rel="noopener noreferrer">
                  <div className="d-flex flex-column align-items-center justify-content-between p-2 text-dark ">
                    <span>
                      <i class="devicon-ubuntu-plain colored"></i>
                    </span>
                    <span className="text-dark">Linux Ubuntu</span>
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
