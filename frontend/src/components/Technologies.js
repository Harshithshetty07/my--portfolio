import React from 'react'
import { SiReact } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiTypescript, SiExpress, SiPostman, SiJest, SiTestinglibrary } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaNode, FaGit, FaGithub, FaDocker, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
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
    <div className='border-b border-neutral-800 pb-24' id='skills'>
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
        Technologies
      </motion.h1>

      {/* Frontend & Backend Cards */}
      <div className='flex flex-wrap justify-center gap-8 px-4 mb-16'>
        
        {/* Frontend Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1}}
          className='relative w-full lg:w-[600px] group'>
          {/* Animated Border */}
          <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse'></div>
          
          {/* Card Content */}
          <div className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Frontend Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50'>
                <IoLogoJavascript className='text-6xl text-yellow-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <SiTypescript className='text-6xl text-blue-400'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50'>
                <SiReact className='text-6xl text-cyan-400'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/50'>
                <RiNextjsFill className='text-6xl text-white'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/50'>
                <SiRedux className='text-6xl text-purple-700'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50'>
                <FaHtml5 className='text-6xl text-orange-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50'>
                <FaCss3Alt className='text-6xl text-indigo-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/50'>
                <RiTailwindCssFill className='text-6xl text-cyan-600'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50'>
                <FaBootstrap className='text-6xl text-purple-500'/>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.2}}
          className='relative w-full lg:w-[600px] group'>
          {/* Animated Border */}
          <div className='absolute -inset-0.5 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse'></div>
          
          {/* Card Content */}
          <div className='relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent'>
              Backend Technologies
            </h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50'>
                <FaNode className='text-6xl text-green-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/50'>
                <SiExpress className='text-6xl text-white'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: 5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50'>
                <IoLogoJavascript className='text-6xl text-yellow-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.1, rotate: -5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <SiTypescript className='text-6xl text-blue-400'/>
              </motion.div>
              {/* Databases Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5  rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>Databases</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50'>
                <SiMongodb className='text-6xl text-green-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <SiMysql className='text-6xl text-blue-400'/>
              </motion.div>
            </div>
          </div>
        </motion.div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Other Categories */}
      <div className='flex flex-wrap justify-center gap-6 px-4'>
      
        {/* Testing Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.1}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent'>Testing</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50'>
                <SiJest className='text-6xl text-pink-500'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50'>
                <SiTestinglibrary className='text-6xl text-red-500'/>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* API Testing Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.2}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'>API Testing</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50'>
                <SiPostman className='text-6xl text-orange-500'/>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Version Control Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.3}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>Version Control</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/50'>
                <FaGit className='text-6xl text-orange-600'/>
              </motion.div>

              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/50'>
                <FaGithub className='text-6xl text-white'/>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Code Editor Card */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 1, delay: 0.4}}
          className='relative w-full md:w-80 group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500'></div>
          <div className='relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-2xl'>
            <h2 className='text-xl font-bold  text-center mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>Code Editor and Containerization</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50'>
                <VscVscode className='text-6xl text-blue-400'/>
              </motion.div>
               <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                whileHover={{scale: 1.15, rotate: 360}}
                transition={{duration: 0.5}}
                className='rounded-2xl border-2 border-neutral-700 p-4 bg-neutral-950/50 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50'>
                <FaDocker className='text-6xl text-cyan-500'/>
              </motion.div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default Technologies