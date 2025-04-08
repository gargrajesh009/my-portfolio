import React from "react";
import "../assets/styles/Project.scss";
import ooklass from "../assets/images/ooklass-home.png";
import dash1 from "../assets/images/dashboard.png";
import dash2 from "../assets/images/dashboard2.0.png";
import casehandling from "../assets/images/casehandling.png";
import matrix from "../assets/images/matrix.jpg";
import { Badge, Chip, Tab } from "@mui/material";


function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Industry Projects</h1>
      <div className="projects-grid">
        <div className="project">
        <Chip label="Danske Bank" color="primary" className="mb-1"/>
          <span>
            <img src={casehandling} className="zoom" alt="thumbnail" width="100%" />
          </span>
          <span>
            <h2>Cobra</h2>
          </span>
          <p>
          Developed a case handling system for the ODD review process, improving the efficiency of case management.
          Enhanced the user interface by integrating various frontend components with REST APIs, significantly improving user engagement and overall experience
          </p>
          <p><strong>TechStack: </strong>Angular 13, TypeScript, .Net Core , C#, MS SQL</p>
        </div>
        <div className="project">
        <Chip label="Danske Bank" color="primary" className="mb-1"/>
          <span>
            <img src={dash2} className="zoom" alt="thumbnail" width="100%" style={{height: "25rem"}}/>
          </span>
          <span>
            <h2>CH-PR Dashboard</h2>
          </span>
          <p>
          Developed an application for case handlers and peer reviewers to track performance, creating front-end components and REST APIs.
          This solution improved the efficiency of case tracking and streamlined performance monitoring.
          </p>
          <p><strong>TechStack: </strong> ReactJs, JavaScript, C#, .Net Core, MS SQL</p>
        </div>
        <div className="project">
        <Chip label="Danske Bank" color="primary" className="mb-1"/>
          <span>
            <img src={dash1} className="zoom" alt="thumbnail" width="100%" style={{height: "25rem"}}/>
          </span>
          <span>
            <h2>Team-Lead Dashboard</h2>
          </span>
          <p>
          Developed an application for team leads to analyze member performance, enabling more effective management and decision-making.
          This solution contributed to improved team productivity and reduced overall company costs.
          </p>
          <p><strong>TechStack: </strong>Angular 13, TypeScript, .Net Core , C#, MS SQL</p>
        </div>
        <div className="project">
        <Chip label="Moss Adams" color="success" className="mb-1"/>
          <span>
            <img src={matrix} className="zoom" alt="thumbnail" width="100%" style={{height: "25rem"}}/>
          </span>
          <span>
            <h2>Matrix</h2>
          </span>
          <p>
          Developed features for the Matrix Tax Web Application,
          used by accountants to prepare tax documents.
          Contributed to implementing a quality check system, addressing technical tasks, bug fixes, and integrating microservices.
          </p>
          <p><strong>TechStack: </strong> ReactJs, TypeScript, C#, .Net Core, MS SQL</p>
        </div>
      </div>
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
        <Chip label="OOklass" color="secondary" className="mb-1"/>
          <a
            href="https://www.ooklass.in/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ooklass} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.ooklass.in/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>OOKlass</h2>
          </a>
          <p>
          Developed an application for managing tuition classes, including features for generating customized reports on academic performance and achievement tracking.
          Engineered a seamless admin and teacher management system for course registration, fee tracking, and performance monitoring.
          </p>
          <p><strong>TechStack: </strong> ReactJs, JavaScript, C#, .Net Core, MS SQL</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
