import React from 'react'
import { project } from '../constants'
import {RiGlobalLine, RiArrowRightSLine} from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'

const Project = () => {

  return (
    <div className='project flex flex-col sm:px-[50px] px-[14px] box-border items-center py-8'>
      <div className='border-dotted border-t-[12px] border-zinc-300 w-[65px] mb-[60px]'/>
      <div className='project-header-container w-full text-center flex flex-col items-center'>
        <h1 className='project-header sm:text-4xl text-3xl font-bold w-full'>{project.header}</h1>
        <p className='project-sub-header sm:text-[13px] text-[11px] italic w-[75%] mt-2'>{project.subheading}</p>
      </div>
      <div className='rpojects-container grid md:grid-cols-2 grid-cols-1 gap-7 mt-10 pb-3'>
        {project.projects.map((project, i) => (
          <div key={i} className='w-fit h-fit relative box-border rounded-[15px] border-solid border-[1px] border-zinc-300 cursor-pointer'>
            <div className='invidual-project box-border rounded-[15px]'>
              <img src={project.image} className='w-full rounded-[15px]'/>          
            </div>
            <div className='bg-[#000] absolute w-full top-0 rounded-[15px] h-full z-1 opacity-0 flex flex-col justify-center items-center text-center sm:px-[60px] ss:px-[50px] px-[30px] gap-4 hover:opacity-100 transition duration-500'>
              <h3 className='text-white sm:text-3xl text-2xl font-bold'>{project.name}</h3>
              <p className='text-gray-400 sm:text-[13px] text-[11px] w-full italic xs:block hidden'>{project.description}</p>
              <a className='github-link px-[25px] py-[9px] sm:w-[50%] w-[60%] sm:text-sm text-[12px] rounded-[15px] bg-transparent border-solid border-[2px] border-[#2C74B3] text-[#2C74B3] font-bold hover:bg-[#2C74B3] hover:text-black flex justify-center items-center' href={project.github}>
                <FaGithub className='mr-1 sm:text-[12px] text-[11px]'/> <p className=''>Github</p> <RiArrowRightSLine className='sm:text-[17px] text-[15px]'/>
              </a>
              <a className='live-demo px-[25px] py-[9px] sm:w-[50%] w-[60%] sm:text-sm text-[12px] rounded-[15px] bg-transparent border-solid border-[2px] border-[#32bb62] text-[#32bb62] font-bold hover:bg-[#32bb62] hover:text-black flex justify-center items-center' href={project.liveDemo}>
                <RiGlobalLine className='mr-1 sm:text-[12px] text-[11px]'/> <p className=''>Live Demo</p> <RiArrowRightSLine className='sm:text-[17px] text-[15px]'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Project