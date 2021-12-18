import React from "react";

function Intro() {
  return (
    <div className="container animate__animated animate__fadeInRight">
      <div className="row m-lg-5 my-lg-5">
        <div className="col-12 col-sm col-md-12 text-lg-center border p-5 shadow">
          <code class="text-dark">
            <h4 className="border p-2 bg-dark text-light editable" contenteditable="true">console.log("Hello World");_</h4><br/>
            <span className="display-5">I am NGENZI</span>
            <h3 className="display">I am a web and a software developer</h3>
            <span className="">Back-end</span> | <span className="text-center text secondary">Front-end</span> | <span className="text-center text secondary">Full-stack</span>
          </code>
          <div/>
        </div>
        <div className="my-5 mt-5">
          <h5 className="text-center">
            Using modern technology, I can help you to build your next project.
          </h5>
        </div>
      </div>
    </div>  
    );
}

export default Intro;
