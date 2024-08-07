import React from 'react'
import { EXPERIENCES } from '../constants/data';
import { motion } from "framer-motion";


function Experiance() {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-5xl'>Experience</motion.h1>
      <div>
        {EXPERIENCES.map((experiance, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'>
              <p className='mb-2 text-[17px] text-neutral-300'>{experiance.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-2xl lg:w-3/4'>
              <h6 className='mb-2 text-2xl font-semibold text-purple-100'>
                {experiance.role}  <span className='text-lg flex flex-col text-purple-200 py-2'>
                  {experiance.company}
                </span>
              </h6>
              <p className='mb-4 text-[17px] text-neutral-400'>{experiance.description}</p>
              <div className='flex flex-wrap'>
                {experiance.technologies.map((tech, index) => (
                  <span key={index} className='mr-2 mb-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-500'>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiance
