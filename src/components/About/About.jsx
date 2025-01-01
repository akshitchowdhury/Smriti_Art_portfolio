import React from "react"
import { motion } from "framer-motion"
import AboutBg from "../../assets/about3.jpg"
import AboutBg2 from "../../assets/about2.jpg"
import AboutBg3 from "../../assets/about.jpg"
export default function About() {
  return (
    <div className="min-h-screen bg-[#00008B] p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-white text-center text-5xl font-bold mb-16 mt-8">
          ABOUT <span className="font-serif italic font-normal">the</span> ARTIST
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h2 className="text-[#FFD700] text-3xl font-bold">
              SMRITI<br />
              LEKHA GOGOI
            </h2>
            
            {/* <p className="text-gray-300 text-sm">
              NOV 23, 1853 — JULY 29, 1890
            </p> */}
            
            <p className="text-white leading-relaxed">
              A Dutch post-impressionist painter with little formal training, 
              who, in just a brief 10-year creative career, created a vast 
              collection of works that became some of the most recognized 
              masterpieces of world art.
            </p>
            
            <p className="text-white leading-relaxed">
              Van Gogh's paintings only began to gain popularity after 
              his death, and now he is considered one of the most famous 
              of all in the world, known for his extraordinary style and 
              exhibitions.
            </p>
          </div>

          {/* Right column - Image composition */}
          <div className="relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-16  top-2"
            >
              <img 
                src={AboutBg}
                
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-6  top-20"
            >
              <img 
                src={AboutBg2}
                alt="Van Gogh portrait fragment 2"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute right-16 top-40"
            >
              <img 
                src={AboutBg3}
                alt="Van Gogh portrait fragment 3"
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
  )
}

