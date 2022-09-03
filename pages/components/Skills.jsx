import React from 'react'
import Image from 'next/image';
import Html from '/public/assets/skills/html.png';
import Css from '/public/assets/skills/css.png';
import Javascript from '/public/assets/skills/javascript.png';
import ReactImg from '/public/assets/skills/react.png';
import Tailwind from '/public/assets/skills/Tailwind.png';
import Github from '/public/assets/skills/github1.png';
import Box from '/pages/components/box.tsx'



const Skills = () => {
    return (
       
      <div id='skills '  className='w-full lg:h-screen p-2  '>     
         <h2 className='py-4 header-skills text-5xl font-bold text-center w-max subpixel-antialised mx-auto'>Skills</h2>    
       <div className='rounded py-10 flex flex-col items-center justify-center shadow-lg border'>
        <div className='flex flex-col items-center justify-center  border-gray-100 rounded text-xl font-bold '>
            <Image 
                src={Html}
                alt='/'
                width='100'
                height='100'
            />
                <div className='text-xl font-bold'>
                    <span>HTML</span>

                </div>
                <Image 
                src={Css}
                alt='/'
                width='100'
                height='100'
            />
                <div className='text-xl font-bold'>
                    <span>CSS</span>

                </div>

                <Image 
                src={Css}
                alt='/'
                width='100'
                height='100'
            />
                <div className='text-xl font-bold'>
                    <span>CSS</span>

                </div>
                <Image 
                src={Css}
                alt='/'
                width='100'
                height='100'
            />
                <div className='text-xl font-bold'>
                    <span>CSS</span>

                </div>
                <Image 
                src={Css}
                alt='/'
                width='100'
                height='100'
            />
                <div className='text-xl font-bold'>
                    <span>CSS</span>

                </div>


                
        </div>

      </div>
      </div>
    );
  };
  
  export default Skills;