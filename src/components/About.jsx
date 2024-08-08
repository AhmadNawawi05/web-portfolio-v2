import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Player } from "@lottiefiles/react-lottie-player";

// Import animasi Lottie
import animationData from "../assets/Animation - 1723122854868.json";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Bagian Kiri: Animasi */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center">
        <Player
          autoplay
          loop
          src={animationData} // Menggunakan import yang benar
          style={{ height: "500px", width: "500px" }}
        />
      </div>

      {/* Bagian Kanan: Konten Tulisan */}
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I do</p>
          <h5 className={styles.sectionHeadText}>I'm a software developer</h5>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am an enthusiastic software developer with expertise in creating comprehensive web applications using Javasript, React, Python, and Cloud Technologies. I am eager to explore new technologies and integrate them into my projects. As a self-driven and dedicated professional, I am always keen to learn and collaborate effectively within a team
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
