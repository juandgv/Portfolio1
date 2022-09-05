import React from 'react'
import Image from 'next/image';
import Message from '/public/assets/skills/message.png';
const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-3xl m-auto px-2 py-16 w-full border-black '>
     
        <h2 className='py-4 header-contact text-5xl text-center w-max subpixel-antialised mx-auto '>Contacto</h2>
        <h3 className='text-center text-2xl'>Escríbeme acá abajo para que nos pongamos en contacto!</h3>
        
 
<div className='col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4 '>
    <div className='lg:p-4 h-full'>
      
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
      </div>
      </div>
    </div>
  )
}

export default Contact