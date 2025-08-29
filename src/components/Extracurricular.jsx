import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {
  backend,
} from "../assets";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// 🎯 Your Extracurricular / Achievements Data
const extracurricular = [
  {
    title: "1st Prize – Mini Project Exhibition",
    type: "AIARK Polytechnic",
    icon: backend, // replace with actual image if you want
    iconBg: "#383E56",
    date: "2017",
    points: [
      "Won 1st Prize in Mini Project Exhibition at AIARK Polytechnic.",
      "Project focused on innovative software development.",
    ],
    credential: "#", // link to certificate/credential if available
  },
];

const ExtracurricularCard = ({ extracurricular }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={extracurricular.date}
      iconStyle={{ background: extracurricular.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={extracurricular.icon}
            alt={extracurricular.type}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {extracurricular.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {extracurricular.type}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {extracurricular.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
            {extracurricular.credential && extracurricular.credential !== "#" && (
              <>
                <br />
                <a
                  href={extracurricular.credential}
                  target="_blank"
                  className="text-blue-400"
                >
                  See Credentials
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Extracurricular = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Achieved so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Extracurricular / Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {extracurricular.map((extracurricular, index) => (
            <ExtracurricularCard
              key={`experience-${index}`}
              extracurricular={extracurricular}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");
