import React from 'react'
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-5xl'>Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiReact className=' text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <RiNextjsFill className=' text-7xl text-white'/>
        </motion.div>

        <motion.div 
       variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <FaPython className=' text-7xl text-blue-400'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <IoLogoJavascript className=' text-7xl text-yellow-500'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className=' text-7xl text-green-500'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMysql className=' text-7xl text-green-500'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <SiRedux className=' text-7xl text-purple-700'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssFill className=' text-7xl text-cyan-600'/>
        </motion.div>

        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className=' rounded-2xl border-4 border-neutral-800 p-4'>
        <FaBootstrap className=' text-7xl text-purple-500'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
