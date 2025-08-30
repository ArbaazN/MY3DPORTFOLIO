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

 <div className="mt-10 flex flex-row flex-wrap justify-center gap-6">
  {technologies.map((technology) => (
    <div
      key={technology.name}
      className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center"
    >
      {technology.icon ? (
        <div className="w-full h-full">
          <BallCanvas icon={technology.icon} />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-xs text-gray-600 rounded-lg">
          Missing
        </div>
      )}
    </div>
  ))}
</div>

</>


  );
};


export default SectionWrapper(Tech, "skills");