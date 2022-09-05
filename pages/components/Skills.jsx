import React from 'react'
import Image from 'next/image';
import Html from '/public/assets/skills/html.png';
import Css from '/public/assets/skills/css.png';
import Javascript from '/public/assets/skills/javascript.png';
import ReactImg from '/public/assets/skills/react.png';
import Nodejs from '/public/assets/skills/node.png';
import Github from '/public/assets/skills/github1.png';
import Git from '/public/assets/skills/git.png';
import Mongodb from '/public/assets/skills/mongo.png';





const Skills = () => {
    return (
       <div>    
        <h2 className='py-4 header-skills text-5xl text-center w-max subpixel-antialised mx-auto'>Skills</h2>  
    <div className=' max-w-4xl p-10 mx-auto mt-20 bg-white rounded-lg border-2 border-black '>
        <div className='flex flex-wrap gap-4'>
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl '>     
            <Image 
                src={Html}
                alt='/'
                width='40'
                height='40'
            />
            
                <div className='text-xl font-semibold text-gray-700'>
                    <span >HTML</span>
                    </div> 
        </div>    
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Css}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>CSS</span>
                </div> 
        </div>

        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Javascript}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>Javascript</span>
                </div> 
        </div>

        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={ReactImg}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>React</span>
                </div> 
        </div>
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Git}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>Git</span>
                </div> 
        </div>
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Github}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>Github</span>
                </div> 
        </div>
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Nodejs}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>Node.js</span>
                </div> 
        </div>
        <div className='flex flex-row items-center gap-2 px-8 py-3 border border-gray-300 rounded-3xl'>   
                <Image 
                src={Mongodb}
                alt='/'
                width='40'
                height='40'
            />
                <div className='text-xl font-semibold text-gray-700'>
                    <span>MongoDB</span>
                </div> 
        </div>
    

        </div>   
    </div>
    </div>
    );
};

export default Skills;