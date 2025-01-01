import React from 'react'
import HeroBg from "../../assets/heroBg.jpg"
import HeroText from './HeroText'
const Hero = () => {
  return (
    <>
    <div className='relative w-full h-[600px]' >
  <img src={HeroBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  <div className='absolute inset-0 bg-black opacity-65'></div>
</div>
<HeroText/>
</>
  )
}

export default Hero
