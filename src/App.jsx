import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {

  return (
    <>
    <div className='overflow-x-clip'>
      <Hero/>
      <About/>
      </div>
    </>
  )
}

export default App
