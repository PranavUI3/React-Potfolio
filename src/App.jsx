import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Aboutme from './components/Aboutme'
import Current from './components/Current'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Aboutme />
     <Skills />
     <Current />
    </>
  )
}

export default App
