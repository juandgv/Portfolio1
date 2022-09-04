import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen text-center black-background'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <h2 className='py-4 header-about-me text-5xl font-bold text-center w-max subpixel-antialised mx-auto'>Sobre mí</h2>
          <p className='py-2 text-black-600 max-w-[70%] m-auto'>
            Estudiante de ingeniería de sistemas en su último semestre, el desarrollo web es mi pasión y mi enfoque de carrera profesional.
          </p> 
          <p className='py-2 text-black-600 max-w-[70%] m-auto'>
            En mi tiempo libre disfruto aprendiendo sobre nuevas tecnologias, informandome sobre temas que me interesan, construyendo nuevos proyectos personales y
             deseando adquirir experiencia laboral en empresas relacionadas con el desarrollo web..
          </p> 
          <p className='py-2 text-black-600 max-w-[70%] m-auto'>
              Creo firmemente en que la interacción diaria que tenemos con amigos y compañeros de trabajo es una de las cosas que mas nos ayuda a crecer y una frase
              que resume esto es: “La sabiduría no es un producto de la educación sino del intento de adquirirla durante toda la vida.”
          </p> 
        </div>
      </div>
    </div>
   
  )
}

export default About
    
       