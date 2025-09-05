import React from 'react'
import dpImage from '../assets/dp.jpg'
import TextChange from './TextChange'


export default function Home() {
  return (
    <div id='Home' className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10 '>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal 
        tracking-tight'><TextChange/> </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
            MERN stack Developer skilled in HTML, CSS, JS, MONGO DB, REACT JS, NODE JS, EXPRESS JS
        </p>
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg
        md:px-4 hover:opacity-8.5 duration-300 hover:scale-105 font-semibold 
        rounded-3xl bg-[#465697]'><a href="#Footer">Contact Me</a></button>
       
  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
  <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg
        md:px-4 hover:opacity-8.5 duration-300 hover:scale-105 font-semibold 
        rounded-3xl bg-[#31aa6a]">
    View Resume
  </button>
</a>

        
        
        </div>
        <div><img className='h-150' src={dpImage} alt="" /></div>
      
    </div>
  )
}
