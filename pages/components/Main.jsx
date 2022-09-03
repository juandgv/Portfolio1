import React from 'react'
import Image from 'next/image'
import NavHero from '/public/assets/hero_foto.png'
import { FaGithub, FaLinkedinIn, AiFillFilePdf } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
const Main = () => {
  return (
    <div className='w-full h-screen text-center black-background'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <br></br> 
            <br></br>                                   
                <div className='flex flex-col items-center justify-center py-10 border-gray-100 '>
                <a >
            <Image className=''
                src={NavHero}
                alt='/'
                width='300'
                height='300'
                
            />
            </a>
                </div>        
                <h1 className='py-2'>
                    Hola 👋, soy Juan David!
                    <br></br>
                    <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'> Web developer</span>
                    </h1>                   
                    <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
                        Estudiante de ingeniería de sistemas en su último semestre, el desarrollo web es mi pasión y mi enfoque de carrera profesional.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
                href='https://www.linkedin.com/in/juandavidgv/'
                target='_blank'
                rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </div>
            </a>
            <a
            href='https://github.com/juandgv'
            target='_blank'
            rel='noreferrer'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
            </div>
            </a> 
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <a href="/static/public/assets/resume.pdf" target="_blank" rel="noreferrer" className="items-center font-bold">Mi Curriculum</a>
                
            </div>
    

            
        
            </div>
        </div>
    </div>
    </div>
);
};

export default Main;