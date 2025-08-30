import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      {/* Desktop & Laptop version */}
      <div className="hidden sm:flex">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex sm:hidden mt-10 flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-md"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
