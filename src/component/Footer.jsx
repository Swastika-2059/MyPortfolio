import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white
    p-10 md:p-12 items-center '>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out</h3>
      </div>
      <ul className='text-sm md:text-xl'>
        <li className='flex gap-1 items-center'><FaEnvelope size={20}/> 
        <a href="swastikatharu760@gmail.com">swastikatharu760@gmail.com</a>
        </li>
      
        <li className='flex gap-1 items-center'> 
          <FaLinkedin size={20}/>
          <a href="https://www.linkedin.com/in/swastika-th%C3%A2r%C3%BC-37645a270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          https://www.linkedin.com/in/swastika-th</a>
        </li>
        <li className='flex gap-1 items-center'>
            <FaGithub size={20}/>
             <a href="https://github.com/Swastika-2059">https://github.com/Swastika-2059</a>
        </li>
      </ul>
    </div>
  )
}
