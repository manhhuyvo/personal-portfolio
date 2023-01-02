import React from 'react'
import { skillAndEducation, themeColors } from '../constants'
import SkillIconsGroup from './SkillIconsGroup'
import {FaDownload} from 'react-icons/fa'
import { Transcript } from '../assets'


const Skill = () => {
  return (
    <div className='skill sm:px-[50px] px-[14px] flex flex-col py-8'>
        <div className='flex flex-col items-center'>            
            <div className='border-dotted border-t-[12px] border-zinc-300 w-[65px] mb-[60px]'/>
            <div className='flex sm:flex-row flex-col sm:gap-1 gap-2 text-center justify-center items-center'>
                <h1 className='skill-header sm:text-4xl text-3xl font-bold w-full'>{skillAndEducation.header}</h1>
                <a href={Transcript} download="Transcript">        
                    <button className='sm:w-fit w-[200px] sm:mt-1 sm:mb-0 mb-2 font-bold sm:text-sm text-[13px] bg-[#7aeea3] sm:ml-5 px-3 py-1 rounded-[5px] hover:text-white h-fit flex justify-center items-center'>
                        <FaDownload className='w-auto sm:text-[10px] text-[9px] mr-2'/>Transcript
                    </button>
                </a>
            </div>
            <p className='icon-group sm:text-[13px] text-[11px] italic w-full text-center mt-1'>{skillAndEducation.education}</p>
        </div>
        <div className='skill-main flex sm:flex-row flex-col justify-between w-full my-3'>
            <div className='skill-image sm:w-2/5 w-full box-border sm:mr-7'>
                <img src={skillAndEducation.headingImage} className="w-full rounded-2xl"/>
            </div>
            <div className='skill-content sm:w-3/5 w-full flex flex-col justify-start items-center gap-3 sm:mt-12 mt-5 mb-7'>
                {
                    skillAndEducation?.skills?.map((skill, i) => (
                        <div key={i} className='individual-skill w-full py-2 px-5 bg-slate-100 rounded-2xl flex flex-col justify-center items-center gap-1 cursor-pointer'>
                            <h3 className='w-full sub-header font-bold text-xl'>{skill.name}</h3>
                            <p className='w-full text-[14px] skill-description italic'>{skill.description}</p>
                            <SkillIconsGroup category={skill.category}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skill