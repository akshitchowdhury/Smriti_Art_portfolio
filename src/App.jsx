import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import GalleryShow from './components/Gallery/GalleryShow/GalleryShow'
import ITransition from './components/Gallery/GalleryShow/ITransition'

function App() {

  return (
    <>
    <div className='overflow-x-clip'>
      <Hero/>
      <About/>
      <GalleryShow/>
      
      </div>
    </>
  )
}

export default App
