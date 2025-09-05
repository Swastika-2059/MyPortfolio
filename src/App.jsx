import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Experience from './component/Experience'
import Projects from './component/Projects'
import Footer from './component/Footer'

export default function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}
