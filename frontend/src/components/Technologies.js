import React from 'react'
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";


function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiReact className=' text-7xl text-cyan-400'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className=' text-7xl text-green-500'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiExpress className=' text-7xl text-neutral-400'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <IoLogoJavascript className=' text-7xl text-yellow-500'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className=' text-7xl text-green-500'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiRedux className=' text-7xl text-purple-700'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssFill className=' text-7xl text-cyan-600'/>
        </div>
        <div className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <FaBootstrap className=' text-7xl text-purple-500'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
