import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
  const links = [
    {
      id: 1,
      name: 'Whatsapp',
      icon: (
        <FaWhatsapp size={25} />
      ),
      description: '(31)97131-5701',
      href: 'https://api.whatsapp.com/send?phone=5531971315701',
      labeldescription: 'Fale comigo',
      labelicon: (
        <AiOutlineArrowRight />
      )
    },
    {
      id: 2,
      name: 'Email',
      icon: (
        <HiOutlineMail size={25} />
      ),
      description: 'joaolucaspinheirotorres@gmail.com',
      href: 'mailto:joaolucaspinheirotorres@gmail.com',
      labeldescription: 'Fale comigo',
      labelicon: (
        <AiOutlineArrowRight />
      )
    },
    {
      id: 3,
      name: 'Meu currículo',
      icon: (
        <BsFillPersonLinesFill size={25} />
      ),
      description: 'João Lucas',
      href: '/Currículo João Lucas Pinheiro Torres.pdf',
      labeldescription: 'Download',
      labelicon: (
        <AiOutlineArrowDown />
      )
    },
  ]
  return (
    <div
      id='contato'
      className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contato</p>
        </div>
        <div className='flex justify-center flex-col md:flex-row'>
          <div className='md:mr-12 flex flex-col items-cente md:h-auto items-center'>
            <p className='py-6 font-bold text-xl'>Fale comigo</p>
            <div className='grid grid-cols-1 gap-8 sm:px-0 justify-center h-full w-full md:h-1/2'>
              {links.map(({ id, name, icon, description, href, labeldescription, labelicon, download }) => (
                <button
                  key={id}
                  onClick={() => { window.open(`${href}`, '_blank') }}
                  className='p-2 bg-transparent rounded-md hover:scale-105 duration-500 py-4 shadow-lg shadow-black cursor-pointer text-white focus:outline-none flex flex-col justify-center items-center border-2 gap-1'>
                  {icon}
                  <p className='font-bold'>{name}</p>
                  <p className='text-sm text-gray-400'>{description}</p>
                  <div className='flex flex-row items-center text-gray-400 mt-2 text-sm'>
                    <p className='mr-1'>{labeldescription}</p>
                    {labelicon}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <form
            action="https://getform.io/f/50d49282-42c2-4487-9510-9ef3033dde91"
            method='POST'
            className='flex flex-col w-full md:w-1/2 '>
            <p className='py-6 text-center font-bold text-xl'>Me envie uma mensagem</p>
            <div className='flex flex-col md:justify-between md:h-full'>
              <input
                type="text"
                name='name'
                placeholder='Digite seu nome'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
              <input
                type="text"
                name='email'
                placeholder='Digite seu email'
                className='my-4 md:my-0 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
              <textarea
                name="message"
                placeholder='Escreva sua mensagem'
                rows="10"
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
              <button className='text-white bg-gradient -to-b from bg-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact