import React from 'react'
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"



const App = () => {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </main>
  )
}

export default App
