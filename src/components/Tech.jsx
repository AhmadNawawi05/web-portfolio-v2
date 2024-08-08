import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[150px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={name} className="w-12 h-12 object-contain mb-2" />
        <h3 className="text-white text-[17px] font-bold text-center">
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div>
      {/* Bagian Pengantar */}
      <div className="mb-12 text-center">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What i use </p>
          <h5 className={styles.sectionHeadText}>Tech I Use</h5>
        </motion.div>
      </div>

      {/* Bagian Kartu Teknologi */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
