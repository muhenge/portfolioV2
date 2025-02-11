import React from "react";
import { Terminal } from "lucide-react";

function About() {
  return (
    <div className="animate__animated animate__fadeInRight container">
      {/* Terminal UI for the Title */}
      <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-lg border border-gray-700 w-full max-w-2xl mb-6 bg-dark text-light position-sticky top-0">
        <div className="bg-gray-800 p-3 flex items-center justify-between rounded-t-md">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-50o0" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Terminal size={14} className="mr-2" />
            terminal
          </div>
          <div className="w-16" />
        </div>
        <div className="p-4 text-lg">
          <span className="text-green-400">$ </span>
          <span className="">echo "Technologies I’ve been working with recently"</span>
        </div>
      </div>

      {/* Skills Section */}
      <div className="col p-5 overflow-auto">
        {/* Languages */}
        <SkillCategory title="Languages">
          <SkillItem link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon="devicon-javascript-plain colored" name="JavaScript" />
          <SkillItem link="https://www.ruby-lang.org/en/" icon="devicon-ruby-plain colored" name="Ruby" />
          <SkillItem link="https://www.typescriptlang.org/" icon="devicon-typescript-plain colored" name="TypeScript" />
        </SkillCategory>

        {/* Front-end */}
        <SkillCategory title="Front-end">
          <SkillItem link="https://reactjs.org/" icon="devicon-react-original colored" name="React" />
        </SkillCategory>

        {/* Back-end */}
        <SkillCategory title="Back-end">
          <SkillItem link="https://rubyonrails.org/" icon="devicon-rails-plain colored" name="Ruby on Rails" />
          <SkillItem link="https://laravel.com/" icon="devicon-laravel-plain colored" name="PHP Laravel" />
          <SkillItem link="https://nestjs.com/" icon="devicon-nestjs-plain colored" name="Nest.js" />
          <SkillItem link="https://expressjs.com/" icon="devicon-express-original colored" name="Express.js" />
        </SkillCategory>

        {/* Databases */}
        <SkillCategory title="Databases">
          <SkillItem link="https://www.postgresql.org/" icon="devicon-postgresql-plain colored" name="PostgreSQL" />
          <SkillItem link="https://www.mongodb.com/" icon="devicon-mongodb-plain colored" name="MongoDB" />
          <SkillItem link="https://www.mysql.com/" icon="devicon-mysql-plain colored" name="MySQL" />
        </SkillCategory>

        {/* Testing */}
        <SkillCategory title="Testing">
          <SkillItem link="https://jestjs.io/" icon="devicon-jest-plain colored" name="Jest" />
          <SkillItem link="https://mochajs.org/" icon="devicon-mocha-plain colored" name="Mocha" />
          <SkillItem link="https://rspec.info/" icon="devicon-rspec-plain colored" name="Rspec" />
        </SkillCategory>

        {/* Other Technologies & Systems */}
        <SkillCategory title="Other Technologies & Systems">
          <SkillItem link="https://nginx.org/en/" icon="devicon-nginx-plain colored" name="Nginx" />
          <SkillItem link="https://ubuntu.com/" icon="devicon-ubuntu-plain colored" name="Ubuntu" />
        </SkillCategory>
      </div>
    </div>
  );
}

function SkillCategory({ title, children }) {
  return (
    <div className="mb-5 border-b pb-3">
      <h4 className="text-light bg-dark p-2">{title}</h4>
      <div className="d-flex flex-wrap justify-content-start gap-4">{children}</div>
    </div>
  );
}

function SkillItem({ link, icon, name }) {
  return (
    <a href={link} className="text-decoration-none text-dark text-center" target="_blank" rel="noopener noreferrer">
      <div className="d-flex flex-column align-items-center p-3">
        <i className={icon} style={{ fontSize: "3rem" }}></i>
        <span>{name}</span>
      </div>
    </a>
  );
}

export default About;
