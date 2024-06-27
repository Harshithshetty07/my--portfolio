import React from 'react'
import profleImg from '../assets/logo.avif'
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function NavBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <img src={profleImg} className='mx-2 w-10' alt='Profile-Img' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <ImLinkedin/>
            <VscGithub/>
            <FaXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default NavBar
