import React from "react";

function Intro() {
  return (
    <div className="container animate__animated animate__fadeInRight">
      <div className="row m-lg-5 my-lg-5">
        <div className="col-12 col-sm col-md-12 text-lg-center border p-5 shadow">
          <code class="text-dark">
            <h4 className="border p-2 bg-dark text-light editable" contenteditable="true">console.log("Hello World");_</h4><br/>
            <span className="display-5">My name is NGENZI</span>
            <h3 className="display"> I specialize in web and software development</h3>
            <span className="">Back-end</span> | <span className="text-center text secondary">Front-end</span> | <span className="text-center text secondary">Full-stack</span>
          </code>
          <div/>
        </div>
        <div className="my-5 mt-5">
          <h5 className="text-center">
Experienced in both back-end and front-end technologies, along with full-stack solutions, I leverage modern technologies to assist you in bringing your next project to life.          </h5>
        </div>
      </div>
    </div>
    );
}

export default Intro;
