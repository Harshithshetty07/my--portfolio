import React from 'react'
import { PROJECTS } from '../constants/data'
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-20 text-center text-5xl '>Projects</motion.h1>
      <div className='grid gap-10 lg:grid-cols-3'>
        {
          PROJECTS.map((project, index) => (
            <div key={index} className='grid gap-3 px-4 py-2'>
              <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} 
                    className='mb-6 rounded w-full h-44'
                    alt={project.title} />
                </a>
              </motion.div>

              <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}>
                <h6 className='mb-2 font-semibold text-2xl hover:text-purple-900 transition duration-200'>{project.title}</h6>
                <p className='mb-4 text-neutral-400 text-[17px]'>{project.description}</p>
                <div className='flex flex-wrap'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'> {tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
