import React from 'react'
import { FaHtml5, FaReact, FaAngular, FaBootstrap, FaNode, FaDatabase, FaJava, FaPython } from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiPhp, SiMysql, SiMongodb, SiDotnet} from 'react-icons/si'
import {TbApi} from 'react-icons/tb'

const SkillIconsGroup = ({category}) => {
  if (category === "frontend"){
    return (
      <div className='w-full flex gap-3 mt-3'>    
        <FaHtml5 className='icon-group text-[20px]'/>
        <FaReact className='icon-group text-[20px]'/>
        <FaAngular className='icon-group text-[20px]'/>
        <FaBootstrap className='icon-group text-[20px]'/>
        <SiTailwindcss className='icon-group text-[20px]'/>
        <SiJavascript className='icon-group text-[20px]'/>
      </div>    
    )
  } else if (category === "backend") {
    return (
      <div className='w-full flex gap-3 mt-3'>
        <TbApi className='icon-group text-[20px]'/>
        <FaNode className='icon-group text-[20px]'/>
        <SiPhp className='icon-group text-[20px]'/>
      </div>
    )
  } else if (category === "database") {
    return (
      <div className='w-full flex gap-3 mt-3'>
        <FaDatabase className='icon-group text-[20px]'/>
        <SiMysql className='icon-group text-[20px]'/>
        <SiMongodb className='icon-group text-[20px]'/>
      </div>
    )
  } else {
    return (
      <div className='w-full flex gap-3 mt-3'>
        <FaJava className='icon-group text-[20px]'/>
        <FaPython className='icon-group text-[20px]'/>
        <SiDotnet className='icon-group text-[20px]'/>
      </div>
    )
  }
}

export default SkillIconsGroup