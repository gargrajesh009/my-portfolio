import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          {/* Education Entry 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Aug 2017 – Aug 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              JSS Science and Technology University (SJCE)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Information Science and Engineering - GPA: 9.16
            </h4>
            <p>
              • Completed a Bachelor's degree in Information Science and
              Engineering from JSS Science and Technology University.
              <br />
              • Gained strong theoretical and practical knowledge in core
              subjects such as Algorithms, Data Structures, and Database
              Management.
              <br />• Actively participated in academic and extracurricular
              activities to enhance learning.
            </p>
          </VerticalTimelineElement>

          {/* Education Entry 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Apr 2015 – Mar 2016" // You can adjust the date range
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              S S Sadan Convent School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              High School - Percentage: 82.20% (CBSE)
            </h4>
            <p>
              • Completed my 12th grade (Higher Secondary) education with a
              focus on Science subjects.
              <br />
              • Gained knowledge in Physics, Chemistry, and Mathematics, with a
              strong understanding of core concepts.
              <br />
              • Actively participated in co-curricular activities, such as
              sports and cultural events, enhancing leadership and teamwork
              skills.
              <br />• Consistently performed well in both academics and
              extra-curricular activities, achieving a high percentage.
            </p>
          </VerticalTimelineElement>

          {/* Education Entry 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Apr 2013 – Mar 2014" // You can adjust the date range
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              S S Sadan Convent School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SSC - CGPA: 10 (CBSE)
            </h4>
            <p>
              • Completed my 10th grade (Secondary School) education under the
              CBSE board.
              <br />
              • Achieved the highest CGPA of 10, excelling in all core subjects
              including Mathematics, Science, and Social Studies.
              <br />
              • Actively participated in school events, science exhibitions, and
              cultural activities, which helped foster creativity and teamwork.
              <br />• Consistently ranked among the top students, demonstrating
              a strong foundation in academics and discipline.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
