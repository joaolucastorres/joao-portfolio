import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Education = () => {
  const items = [
    {
      id: 1,
      period: 'Fevereiro, 2022 - Atualmente ( 4º semestre )',
      name: 'Graduação Análise e Desenvolvimento de Sistemas',
      institution: 'PUC Minas - Pontifícia Universidade Católica De Minas Gerais, Ensino À Distância',
      concluded: false,
      certificate: ''
    },
    {
      id: 2,
      period: 'Agosto, 2023',
      name: 'Curso Linguagem Kotlin',
      institution: 'Alura',
      concluded: true,
      certificate: 'https://cursos.alura.com.br/degree/certificate/afa7f80f-1995-4ace-ba6f-cef3f4c7b22c?lang=pt_BR'
    },
    {
      id: 3,
      period: 'Julho, 2023',
      name: 'Curso Java com Orientação a Objetos',
      institution: 'Alura',
      concluded: true,
      certificate: 'https://cursos.alura.com.br/degree/certificate/e6673f8c-9a4d-4092-ab72-0fe78e95db36?lang=pt_BR'
    },
    {
      id: 4,
      period: 'Julho, 2023',
      name: 'Curso Linguagem TypeScript',
      institution: 'Alura',
      concluded: true,
      certificate: 'https://cursos.alura.com.br/degree/certificate/f184fde4-5423-499d-a80e-5d6d3a87664b?lang=pt_BR'
    },
  ]
  return (
    <div
      name="educação"
      className='w-full h-full bg-gradient-to-b from-black to-gray-900 text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Educação</p>
          <p className='py-6'>Essa é minha formação acadêmica</p>
        </div>
        <div className='h-auto flex justify-center mt-10'>
          <div>
            <ul>
              {items.map(({ id, name, period, institution, concluded, certificate }) => (
                <li key={id} className='relative flex gap-6 pb-5 items-baseline '>
                  <div className='before:absolute before:left-[7.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                    <svg height="16" width="16" >
                      <circle cx="8" cy="8" r="8" className='fill-gray-400' />
                    </svg>
                  </div>
                  <div
                    onClick={() => { if (concluded) window.open(`${certificate}`, '_blank') }}
                    className='p-2 bg-transparent rounded-md hover:scale-105 duration-500 shadow-lg shadow-black cursor-pointer text-white focus:outline-none flex flex-col border border-gray-900 gap-1 w-full'>
                    <p className='font-bold text-gray-400'>{period}</p>
                    <p className='font-bold mt-2'>{name}</p>
                    <p className=' text-sm'>{institution}</p>
                    {
                      concluded &&
                      <div
                        className='flex flex-row items-center self-end text-gray-400 mt-2 text-sm'>
                        <p className='mr-1'>Visualizar certificado</p>
                        <AiOutlineArrowRight size={20} />
                      </div>
                    }
                    {
                      !concluded &&
                      <div
                        className='flex flex-row items-center self-end text-gray-400 mt-2 text-sm'>
                        <p className='mr-1'>Em andamento</p>
                      </div>
                    }

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education