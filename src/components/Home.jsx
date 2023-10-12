import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import HeroImage from "../assets/heroImage.png"
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full pt-20'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white lg:text-7xl'>Desenvolvedor</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Meu nome é João Lucas, atualmente cursando o 4º período do curso de Análise e Desenvolvimento de Sistemas na Universidade PUC Minas, me desenvolvendo em engenharia de software e ávido para adquirir novas experiências para minha carreira profissional.
          </p>
          <div>
            <Link
              to='portfólio'
              smooth
              duration={500}
              offset={-80}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="minha foto de perfil"
            className='rounded-2xl mx-auto w-2/3 ' />
        </div>
      </div>
    </div>
  )
}

export default Home