import React from 'react'

function About() {
  return (
    <div className="container animate__animated animate__fadeInRight p-5">
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
        <div className="col shadow border-end border-start col-sm-12 col-md-8 p-5 ">
          <h4>Here are a few technologies I’ve been working with recently</h4>
          <code>
          <div className="mb-3">
            <div className="d-flex flex-row text-dark">Programming Languages</div>
            <ul className="list-group">
              <li className="list-group-item">Ruby</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">TypeScript</li>
              <li className="list-group-item">PHP</li>
            </ul>
          </div>
           
          <div className="">
            <ul className="list-group">
              <li className="list-group-item">Ruby</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">PHP</li>
            </ul>
          </div>
          </code>
         
        </div>
      </div>
    </div>
  )
}

export default About
