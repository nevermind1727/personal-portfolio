import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import styles from "../styles/education.module.scss"
import {MdSchool} from "react-icons/md"
import {FaUniversity} from "react-icons/fa"
import {SiUdemy} from "react-icons/si"
import {MdCastForEducation} from "react-icons/md"

function Education() {
  return (
    <div className={styles.educationContainer}>
      <VerticalTimeline lineColor="#3e497a">  
        <VerticalTimelineElement className="vertical-timeline-element--education"  date="2009-2020" iconStyle={{background: "#3e497a", color: "#fff"}} icon={<MdSchool />}>
          <h3 className="vertical-timeline-element-title">
            Graduated from Secondary School
          </h3>
          <p>Secondary School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"  date="2020-present" iconStyle={{background: "#3e497a", color: "#fff"}} icon={<FaUniversity />}>
          <h3 className="vertical-timeline-element-title">
            Sumy State University, Sumy, Ukraine
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"  date="06.08.2021-05.10.2021" iconStyle={{background: "#3e497a", color: "#fff"}} icon={<SiUdemy />}>
          <h3 className="vertical-timeline-element-title">
            Udemy Course - The Web Developer Bootcamp 2022
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Colt Steele
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"  date="05.10.2021-present" iconStyle={{background: "#3e497a", color: "#fff"}} icon={<MdCastForEducation />}>
          <h3 className="vertical-timeline-element-title">
            Learning Web Development by myself using YouTube, Freecodecamp, CodeAcademy, creating projects.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education