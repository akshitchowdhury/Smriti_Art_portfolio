import React from 'react';
import "./Hero.css";
import HeroText from './HeroText';
import { motion } from "framer-motion";

import AboutBg from "../../assets/artDump/Sketch/s9.jpg";
import AboutBg2 from "../../assets/artDump/Exhibition/e1.jpg";
import AboutBg3 from "../../assets/artDump/Concept/c1.jpeg";

const Hero = () => {
  return (
    <div className="min-h-[130vh] hero-section p-8 font-sans">
      <div className="hero-content">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <HeroText />
            </div>

            {/* Right column - Image composition */}
            <div className="relative h-[400px]">
              {/* Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  zIndex: 50,
                  scale: 1.1,
                  opacity: 1,
                }}
                className="absolute left-12 top-0 rounded-lg shadow-lg"
              >
                <img 
                  src={AboutBg3}
                  alt="Artist portrait fragment 1"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  zIndex: 50,
                  scale: 1.1,
                  opacity: 1,
                }}
                className="absolute left-7 top-28 rounded-lg shadow-lg h-[500px]"
              >
                <img 
                  src={AboutBg2}
                  alt="Artist portrait fragment 2"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  zIndex: 50,
                  scale: 1.1,
                  opacity: 1,
                }}
                className="absolute right-16 top-44 rounded-lg shadow-lg"
              >
                <img 
                  src={AboutBg}
                  alt="Artist portrait fragment 3"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Decorative lines */}
              <svg
                className="absolute top-0 right-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
              >
                <path
                  d="M300,50 Q350,150 280,250"
                  stroke="#FFD700"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
