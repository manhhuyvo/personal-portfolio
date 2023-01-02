import React from 'react'
import { bannerDetails, themeColors } from '../constants'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { ManhHuyVo_Updated_Resume } from '../assets'

const Banner = () => {
  return (
    <div className='banner w-full pb-7 sm:px-[50px] box-border'>
        <div className='banner-icons flex flex-row w-full justify-end items-center gap-5 py-3 px-[12px] '>
            <a href="https://github.com/manhhuyvo"><FaGithub className='text-2xl'/></a>
            <a href="https://www.linkedin.com/in/manh-huy-vo-a097b2183/"><FaLinkedin className='text-2xl'/></a>
            <a href={ManhHuyVo_Updated_Resume} download="Resume"><button className='font-bold hover:bg-[#32bb62] hover:text-white bg-transparent border-solid  px-3 py-1 rounded-[5px] '>Download CV</button></a>
            
        </div>
        <div className='banner-details flex flex-col justify-center items-center px-3'>
            <h1 className='font-bold text-[50px] mb-0 text-center'>{bannerDetails.name} <span className='text-[#66d38c]'>({bannerDetails.preferedName})</span></h1>
            <h3 className='font-semibold text-xl my-2 text-center'>{bannerDetails.title}</h3>
            <p className='sm:w-[50%] w-full text-center mt-5 text-gray-500 text-[14px]'>&#9995; {bannerDetails.summary}</p>
        </div>
        <div className='banner-image flex justify-center items-center mt-10'>
            <img src={bannerDetails.image} className="sm:w-[300px] w-[200px] h-[200px] sm:h-[300px] object-cover rounded-full"/>
        </div>
    </div>
  )
}

export default Banner