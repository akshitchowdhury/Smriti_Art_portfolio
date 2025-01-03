import React from "react"
import { motion } from "framer-motion"
import AboutBg from "../../assets/about3.jpg"
import AboutBg2 from "../../assets/about2.jpg"
import AboutBg3 from "../../assets/about.jpg"
export default function About() {
  return (
    <div className="min-h-screen bg-red-500 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
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

          
        </div>
      </div>
    </div>
  )
}

