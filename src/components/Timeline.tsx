import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Apr 2024 – Present"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Application Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Moss Adams</h4>
    <p>
      • Developed features for the Tax Web Application "Matrix," used by accountants to prepare tax documents.<br />
      • Contributed to the implementation of a quality check system, addressing technical tasks, bug fixes, and microservices integration.<br />
      • Played a significant role in the time-critical initial production release.<br />
      • Actively involved in UI/UX decision-making and mentored colleagues.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug 2021 – Apr 2024"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Danske Bank (Acquired by Infosys in Sep 2023)</h4>
    <p>
      • Developed features for Anti-Money Laundering (AML) operations, enabling case handlers to manually access and assess cases.<br />
      • Guided projects through the SDLC, ensuring seamless integration of CI/CD pipelines for efficient development, testing, and deployment.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Feb 2021 – Aug 2021"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Associate Software Engineer (Intern)</h3>
    <h4 className="vertical-timeline-element-subtitle">Danske Bank</h4>
    <p>
      • Developed and maintained RESTful endpoints, database tables, and business features.<br />
      • Troubleshot services and deployed them to production following Agile methodologies.<br />
      • Assisted senior back-end developers in creating REST APIs, Angular components, and bug fixes.
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;