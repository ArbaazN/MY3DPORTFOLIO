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

      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {technologies.map((technology) => (
            <div
              className="w-20 h-20 sm:w-28 sm:h-28"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>


    </>

  );
};


export default SectionWrapper(Tech, "skills");