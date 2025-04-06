import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faAngular,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faC, faChartLine, faCloud, faCode, faDatabase, faHashtag, faServer, faTools } from "@fortawesome/free-solid-svg-icons";
const labelsFirst = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "AgGrid",
  "Angular Matrial",
  "Matrial UI",
  "Bootstrap5"
];

const labelsSecond = [
  ".NET Core",
  "C#",
  "Clean Architecture",
  "Entity Framework",
  "MSSQL",
  "MySQL"
];

const labelsThird = ["Git", "Docker", "Azure", "Azure DevOps", "RabbitMQ"];

const labelsForth =[
    "VS Code",
    "Visual Studio",
    "Postman",
    "SSMS",
    "Kibana",
    "Azure AppInSight"
]

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="row">
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" className="mr-1"/>
              <FontAwesomeIcon icon={faAngular} size="3x" className="mr-1"/>           
              <FontAwesomeIcon icon={faHtml5} size="3x" className="mr-1"/>              
              <FontAwesomeIcon icon={faCss3} size="3x" className="mr-1"/>              
              <FontAwesomeIcon icon={faJs} size="3x" className="mr-1"/>
            
              <h3>Front-End Expertise</h3>
              <p>
                I have built a diverse array of web applications from scratch
                using modern technologies such as React and Angular. I have a
                strong proficiency in the SDLC process and frontend + backend
                development.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faCode} size="3x" className="mr-1"/>
              <FontAwesomeIcon icon={faDatabase} size="3x" className="mr-1"/>
              <FontAwesomeIcon icon={faServer} size="3x" className="mr-1"/>
              <FontAwesomeIcon icon={faC} size="3x"/>
              <FontAwesomeIcon icon={faHashtag} size="3x" className="mr-1"/>
              <h3>Back-End Expertise</h3>
              <p>
                As a backend developer specializing in .NET and C#, I build scalable, high-performance applications using ASP.NET Core and Entity Framework.
                I have experience developing robust RESTful APIs, optimizing database queries, and deploying to Azure.
                My focus is on delivering clean, maintainable code and efficient solutions for enterprise applications.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faCloud} size="3x" className="mr-1"/>
              <FontAwesomeIcon icon={faDocker} size="3x" />
              <h3>Cloud & DevOps</h3>
              <p>
                With experience in Azure DevOps and Azure, I specialize in automating CI/CD pipelines,
                managing cloud infrastructure, and ensuring seamless deployments.
                I focus on leveraging Azure services for scalable solutions and optimizing operational workflows through DevOps best practices.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faTools} size="3x" className="mr-1"/>           
              <FontAwesomeIcon icon={faChartLine} size="3x" />
              <h3>Tools</h3>
              <p>
                I utilize a variety of tools to optimize my development workflow,
                ensuring efficient coding, seamless API testing, and comprehensive documentation.
                My approach focuses on maintaining smooth database management and leveraging
                real-time monitoring for enhanced system performance and troubleshooting.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tools:</span>
                {labelsForth.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
