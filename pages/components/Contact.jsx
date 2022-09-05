import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Message from '/public/assets/skills/message.png';

const Contact = () => {

  return (
    <div id='contact' className='  w-full lg:h-screen'>
      <div className=' max-w-[1240px] m-auto px-2 py-16 w-full '>
      <h2 className='py-4 header-contact text-5xl text-center w-max subpixel-antialised mx-auto '>Contacto</h2>
        <h3 className='text-center text-2xl'>Escríbeme acá abajo para que nos pongamos en contacto!</h3>
        <br></br>
        <div className='flex gap-4 items-center justify-center  hover:scale-105 ease in duration-300'>

        <div className='gap-2 px-8 py-3 border border-blue-300 rounded-3xl bg-indigo-300 '>
  <div className='flex gap-4 items-center justify-center  hover:scale-105 ease in duration-300'>
            
  <Image 
                src={Message}
                alt='/'
                width='80'
                height='80'
            />

     <div>
    <a href="mailto:juandagilva85@gmail.com" className='p-text'>juandagilva85@gmail</a>
    </div>
</div>
</div>
</div>
        
 
       
{/* shadow-xl shadow-gray-400 rounded-xl lg:p-4 */}
        <div className='grid lg:grid-cols-5 gap-8'>                     
          <div className='  col-span-5 max-w-4xl p-10 mx-auto mt-20 bg-white rounded-lg border-2 border-black'>
            <div className='flex items-center justify-center  p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-auto py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;