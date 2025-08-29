import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import {
  backend,
} from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// 🎓 Education data from your resume
const educationData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    company_name: "AIKTC, Panvel",
    icon: backend, // replace with actual logo if you want
    iconBg: "#383E56",
    date: "2019 – 2022",
    points: [
      "Graduated with 8.7 CGPA.",
      "Specialized in Computer Science subjects including Software Development, Databases, and System Design.",
      "Built academic projects related to full stack development and server management.",
    ],
  },
  {
    title: "Diploma in Computer Science",
    company_name: "AIARK Polytechnic",
    icon: backend, // replace with actual logo if you want
    iconBg: "#383E56",
    date: "2016 – 2019",
    points: [
      "Graduated with 82.31%.",
      "Developed a strong foundation in programming, networking, and operating systems.",
      "Won 1st Prize in Mini Project Exhibition (2017).",
    ],
  },
];

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Studied so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Qualifications.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationData.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
