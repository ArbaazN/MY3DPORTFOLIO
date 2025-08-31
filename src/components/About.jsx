import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import aboutImg from "../assets/Hero.png"; // your 3D image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[260px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-14 h-14 object-contain"
        />
        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Top Section with Text + Image */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[26px] md:leading-[30px] mx-auto md:mx-0"
          >
            I'm Arbaaz Nakhwa, a Full Stack Developer with 3+ years of
            experience building and deploying scalable web applications. I
            specialize in PHP, Laravel, MySQL, and server management on CentOS &
            RHEL. I have extensive experience developing collections applications
            including telecalling, loan recovery, and agent & field collection
            systems. Skilled in server-level troubleshooting, API development,
            and managing the full SDLC, I excel at delivering enterprise-level
            solutions efficiently. I am passionate about creating scalable,
            reliable, and user-friendly applications that solve real-world
            problems.
          </motion.p>

          <button
            className="mt-8 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xHsYOdwuPxtUPQ2EIiD0XbM_eV52fgz6/view?usp=drive_link",
                "_blank"
              )
            }
          >
            <span className="font-semibold">Resume</span>
          </button>
        </div>

        {/* Right Image with floating effect */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="p-[3px] rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl w-64 sm:w-72 md:w-[380px] object-contain"
            />
          </div>
        </motion.div>


      </div>

      {/* Services Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
