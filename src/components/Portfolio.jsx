import React from 'react'
import embreve from '../assets/portfolio/embreve.png'
import aluroni from '../assets/portfolio/aluroni.png'
import forum from '../assets/portfolio/forum.png'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: aluroni,
      description: 'Cardápio do restaurante Aluroni. Projeto acadêmico front-end, utilizando React e Typescript.',
      demo: 'https://joaolucastorres.github.io/aluroni/',
      code: 'https://github.com/joaolucastorres/aluroni',
      coming: false
    },
    {
      id: 2,
      src: forum,
      description: 'Fórum de dúvidas relacionado aos cursos Alura. Projeto back-end, utilizando Kotlin e Spring Boot.',
      demo: '',
      code: 'https://github.com/joaolucastorres/forum-alura',
      coming: false
    },
    {
      id: 3,
      src: embreve,
      description: 'Novos projetos sendo desenvolvidos :) Aguarde!',
      demo: '',
      code: '',
      coming: true
    }
  ]
  return (
    <div
      name='portfólio'
      className='bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Portfólio</p>
          <p className='py-6'>Veja um pouco dos meus trabalhos bem aqui</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, demo, code, coming, description }) => (
            <div key={id} className='flex shadow-md shadow-black rounded-lg flex-col items-center justify-between border border-gray-900'>
              <img
                src={src}
                alt=""
                className='rounded-md duration-200 hover:scale-105' />
              <p className='flex items-center justify-center text-gray-400 mt-4 text-sm p-1 text-center'>{description}</p>
              <div className='flex justify-center'>
                {coming &&
                  <button className='px-6 py-3 m-4 duration-200 hover:scale-110 text-gray-500'>Em breve</button>
                }
                {!coming &&
                  <>
                    <button
                      onClick={() => {
                        window.open(`${demo}`, '_blank')
                      }}
                      className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                    <button
                      onClick={() => {
                        window.open(`${code}`, '_blank')
                      }}
                      className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Código</button></>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio