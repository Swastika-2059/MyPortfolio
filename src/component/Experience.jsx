import React from 'react'
// From Font Awesome (fa)
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  
} from "react-icons/fa";

// From Simple Icons (si)
import { 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";


export default function Experience() {
  return (
    <div id='Experience' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
               <FaHtml5 size={40} color="#E34F26" />
               </span>
               <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaCss3Alt size={40} color="#1572B6" />
               </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaJs size={40} color="#F7DF1E" />
               </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <FaReact size={40} color="#61DAFB" />
               </span>
                 <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
             <FaNodeJs size={40} color="#339933" />
               </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
             <SiExpress size={40} color="white" />
               </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
             <SiMongodb size={40} color="#47A248" />
               </span>

            </div>
            {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg
            p-4 items-center'>
                <FaGoogle color='#4285F4 ' size={50}/>
                <span className='text-white'>
                    <h2 className='leading-tight '>Software Engineer, Google</h2>
                    <p className='text-sm leading-tight font-thin '>june 2024-present</p>
                <ul className='text-sm p-2'>
                   <li>Work as a software engineer</li>
                   <li>Senior as SDE develoer</li>
                </ul>
                </span>
            </div> */}
        </div>
      
    </div>
  )
}
