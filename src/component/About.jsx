import React from 'react'
import AboutImg from '../assets/dpp.jpg'
import { RiArrowRightLine } from '@remixicon/react'
// import { IoArrowFroward } from '@remixicon/react'

export default function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap
    md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg 
    p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center
            '>
                <img className='md:h-80' src={AboutImg} alt="" />
                <ul>
                    <div className='flex gap-3 py-4'>
                       <RiArrowRightLine size={30} className='mt-1'/>
                        <span className='w-96'>
                           <h1 className='text-xl md:text-2xl font-semibold 
                           leading-normal'>Frontend Developer</h1>
                           <p className='text-sm md:text-md leading-tight'>
                            I have experience in building responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and Bootstrap. I focus on creating clean designs, smooth navigation, and interactive components that improve the overall user experience.

                           </p>
                        </span>
                    </div>
                      <div className='flex gap-3 py-4'>
                        <RiArrowRightLine size={30} className='mt-1'/>
                        <span className='w-96'>
                           <h1 className='text-xl md:text-2xl font-semibold 
                           leading-normal'>Backend Developer</h1>
                           <p className='text-sm md:text-md leading-tight'>
                            I am skilled in developing robust server-side applications using Node.js and Express.js. I can handle APIs, authentication, and database connectivity to ensure smooth communication between the frontend and backend.
                        </p>
                        </span>
                    </div>
                      <div className='flex gap-3 py-4'>
                        <RiArrowRightLine size={30} className='mt-1'/>
                        <span className='w-96'>
                           <h1 className='text-xl md:text-2xl font-semibold 
                           leading-normal'>MongoDB Database</h1>
                           <p className='text-sm md:text-md leading-tight'>
                            I work with MongoDB, a NoSQL database, to store and manage data efficiently. I can design schemas, perform CRUD operations, and integrate MongoDB with backend applications to build scalable and dynamic web solutions.
                             
                           </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}
