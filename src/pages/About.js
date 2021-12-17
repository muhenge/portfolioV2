import React from 'react'
import { Progress } from 'reactstrap'

function About() {

  const rubybar = 60;
  return (
    <div className="container animate__animated animate__fadeInRight ">
      <div className="row">
        <div className="col col-sm-12 col-md-4 p-5 border-end shadow">
          <h4 className="">About Me</h4>
          <code className="text-dark text-sm-center">
          I enjoy creating things that solve problems. 
          I am a full-stack developer with a passion 
          for building things. I am currently working
          as a Back-end developer. 
          
          </code>
         </div>
        <div className="col shadow border-end border-start col-sm-12 col-md-8 p-5">
          <h4 className="mb-3">Here are a few technologies I’ve been working with recently</h4>
          <code>
          <div className="mb-3">
            <div className="d-flex flex-row text-dark h5 mb-2">Programming Languages</div>
            <ul className="list-group">
              <li className="list-group-item">
                Ruby
                <Progress value={90} color="dark">90%</Progress>
                <div className="progress-bar" now={rubybar} label={`${rubybar}%`} ></div>
              </li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">TypeScript</li>
              <li className="list-group-item">PHP</li>
            </ul>
          </div>
           
          <div className="">
          <div className="d-flex flex-row text-dark h5 mb-2">Back-end frameworks</div>
            <ul className="list-group">
              <li className="list-group-item">Ruby on Rails</li>
              <li className="list-group-item">Nest.js</li>
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">PHP Laravel</li>
            </ul>
          </div>
          <div className="">
          <div className="d-flex flex-row text-dark h5 mb-2">Front-end frameworks and tools</div>
            <ul className="list-group">
              <li className="list-group-item">React.js</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Tailwindcss</li>
              <li className="list-group-item">Vanilla JavaScript</li>
              <li className="list-group-item">Vanilla JavaScript</li>
              <li className="list-group-item">Webpack</li>
            </ul>
          </div>
          <div className="">
          <div className="d-flex flex-row text-dark h5 mb-2">Testing</div>
            <ul className="list-group">
              <li className="list-group-item">Rspec</li>
              <li className="list-group-item">Jest</li>
              <li className="list-group-item">Mocha & Chai</li>
            </ul>
          </div>
          </code>
         
        </div>
      </div>
    </div>
  )
}

export default About
