import React from 'react'
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import reactImage from '../assets/react.png';
import javaImage from '../assets/javascript.png';
import githubImage from '../assets/github.png';
import tailwindImage from '../assets/tailwind.png';
const Portfoilo = () => {
    const portfolios=[
        {
            id:1,
            src:htmlImage,
        },
        {
            id:2,
            src:cssImage,
        },
        {
            id:3,
            src:reactImage,
        },
        {
            id:4,
            src:javaImage,
        },
        {
            id:5,
            src:githubImage,
        },
        {
            id:6,
            src:tailwindImage,
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 capitalize'>Check out Some of my work right here</p>
            </div>
           
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0'>
            {
                portfolios.map(({id,src})=>(
                    <div key={id} className='shadow-md  shadow-gray-600 rounded-lg'>
                    <img src={src} alt='weatherapp' className='rounded-md duration-200 hover:scale-105 w-40 mx-auto p-2'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>
                            Demo
                        </button>
                        <button className='w-1/2 px-6 py-2 m-2 duration-200  hover:scale-105'>
                            Code
                        </button>
                    </div>
                </div> 
                ))
            }
            </div>
            </div>
    </div>
  )
}

export default Portfoilo