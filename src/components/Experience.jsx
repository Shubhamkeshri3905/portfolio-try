import React from 'react'
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import reactImage from '../assets/react.png';
import javascriptImage from '../assets/javascript.png';
import githubImage from '../assets/github.png';
import tailwindImage from '../assets/tailwind.png';
import javaImage from '../assets/java.png';
import nodeImage from '../assets/node.png';
import dsaImage from '../assets/dsa.png';
const Experience = () => {
    const techs=[
        {
            id:1,
            src:htmlImage,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:cssImage,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:reactImage,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:4,
            src:javascriptImage,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:5,
            src:githubImage,
            title:'GITHUB',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:tailwindImage,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:javaImage,
            title:'JAVA',
            style:'shadow-red-500'
        },
        {
            id:8,
            src:dsaImage,
            title:'DSA',
            style:'shadow-pink-500'
        },
        {
            id:9,
            src:nodeImage,
            title:'NODE',
            style:'shadow-pink-500'
        },
       
    ]
  return (
    <div name='experiences' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-4 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
{
    techs.map(({id,title,src,style})=>(
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt='html' className='w-20 mx-auto'/>
        <p className='mt-4'>{title}</p>
    </div>

    ))
}
</div>     
        </div>
    </div>
  )
}

export default Experience