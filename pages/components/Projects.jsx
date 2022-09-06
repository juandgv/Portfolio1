import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MernImg from '/public/assets/projects/mern_app.jpg'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='text-secondary undefined'>
          <h2 className='py-4 header-projects text-5xl font-bold text-center w-max subpixel-antialised mx-auto'>Proyectos</h2> 
      
        </div>
       

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Crypto App'
            backgroundImg={MernImg}
            projectUrl='/mern'
            tech='React JS' />
        </div>
      </div>
    </div>  
  );
};

export default Projects;