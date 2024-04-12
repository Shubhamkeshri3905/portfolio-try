import React from 'react'
import HeroImage from "../assets/myImage.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from'react-scroll';
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-700 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md '>
                I have a good Knowledge of building and designing webpages.
                Currently, I love to work with web applications
                using technologies like Html , Css ,tailwind ,React...
                I'm good at problem Solving ...
            </p>
            <div className='flex '>
                <Link to='portfolio' smooth duration={500} className=' group flex text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500
                cursor-pointer '>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight size={25} className='ml-2' />
                    </span>
                </Link>
            </div>
        </div>
        <div className='rounded-xl w-1/3 shadow-md shadow-gray-400  mb-5 '>
            <img src={ HeroImage} alt='my profile ' className='   rounded-xl   mt-30 mx-auto w-full   md:w-full ' / >
        </div>
       </div>
    </div>
  )
}

export default Home