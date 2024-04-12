import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
             <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            I am Shubham Keshri, currently pursuing B.Tech in Computer Science
             and Engineering (CSE) at Techno Main Saltlake. 
             I am in my third year of the Computer Science and 
             Engineering program and have acquired strong knowledge 
             in core subjects such as Operating Systems, 
             Computer Networks, Object-Oriented Programming,
              Java, and C. I am proficient in working with both
               Linux and Windows environments. Additionally,
                I possess excellent problem-solving skills
             honed through academic and practical experiences.

            </p>
            <br/>
            <p className='text-xl '>
            My short-term goal is to secure a position as a 
            Software Development Engineer (SDE) in a reputed company. 
            Looking ahead, my long-term aspiration is to specialize 
            in Artificial Intelligence development. I am known for 
            my hardworking nature, adaptability to diverse environments,
             and effective teamwork and leadership skills
            </p>
        </div>
    </div>
  )
}

export default About