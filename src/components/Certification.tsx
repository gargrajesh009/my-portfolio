import React from "react";
import "../assets/styles/Project.scss";
import az from "../assets/images/az099.png"

function Certification() {
  return (
    <div className="projects-container" id="certification">
      <h1>Certification</h1>
      <div className="projects-grid">
        <div className="project">
          <span>
            <img src={az} className="zoom" alt="thumbnail" width="100%" />
          </span>
          <span>
            <h2>Azure Fundamental</h2>
          </span>
          <p>
          The AZ-900: Microsoft Azure Fundamentals certification demonstrates my foundational knowledge of Azure services and cloud concepts.
          It covers key areas such as Azure cloud architecture, pricing, governance, and security,
          showcasing my ability to navigate and leverage Azure for developing and managing cloud-based solutions.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Certification;
