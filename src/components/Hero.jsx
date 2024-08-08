import React from 'react';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0F67B1]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white-100 text-4xl sm:text-5xl`}>
            Hi, I'm <br /> <span className='text-[#0F67B1]'><ReactTyped strings={["Ahmad"]} typeSpeed={100} loop /></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-lg sm:text-xl`}>
            A young software developer based in Bandung, <br className='sm:block hidden' /> driven by a deep passion for the dynamic <br className='sm:block hidden' /> realm of Information Technology (IT).
          </p>

          {/* Social Media Icons */}
          <div className="flex mt-5 space-x-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white-100 text-2xl hover:text-[#071952]" />
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white-100 text-2xl hover:text-[#071952]" />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white-100 text-2xl hover:text-[#071952]" />
            </a>
            <a href="mailto:your-email@example.com">
              <FaEnvelope className="text-white-100 text-2xl hover:text-[#071952]" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-5">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-[#071952] text-white-100 py-2 px-6 rounded-md text-lg sm:text-xl hover:bg-[#e01c40]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center">
          <Player
            autoplay
            loop
            src="/src/assets/Animation - 1723092453847.json"
            style={{ height: '500px', width: '500px' }}
          />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero;
