import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image'
import NavHero from '/public/assets/hero_foto.png'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div className='pt-8'>
                        <Image
                            src={NavHero}
                            alt='/'
                            width='300'
                            height='300'
                        />
                        
                    </div>
        <div>
 
          <h1 className='py-4 text-white-700'>
          Hola 👋, soy Juan David!
          <br></br>
          <span className='font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'> Web developer</span>
          </h1>
          <p className='py-4 text-white-600 sm:max-w-[70%] m-auto'>
            Estudiante de ingeniería de sistemas en su último semestre, el desarrollo web es mi pasión y mi enfoque de carrera profesional.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;