import React from 'react'
import embreve from '../assets/portfolio/embreve.png'
import portfolio from '../assets/portfolio/portfolio.png'
import rentabook from '../assets/portfolio/rentABook.jpg'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      description: 'Meu portfólio e currículo. Competências: React.js · JavaScript · Tailwind CSS · GitHub · HTML',
      demo: 'https://joaolucastorres.github.io/portfolio/',
      code: 'https://github.com/joaolucastorres/portfolio',
      coming: false,
      demoAvaliable: true
    },
    {
      id: 2,
      src: rentabook,
      description: 'Plataforma de alugueis, venda e troca de livros. Competências: Padrões de design · Kotlin · Spring Boot · MongoDB · Kanban · Scrum · GitHub · Arquitetura MVC · UML (Linguagem de modelagem unificada)',
      demo: '',
      code: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-aplicdistrib-t5-pmv-ads-2023-2-e4-g3-rentabook',
      coming: false,
      demoAvaliable: false
    },
    {
      id: 3,
      src: embreve,
      description: 'Novos projetos sendo desenvolvidos :) Aguarde!',
      demo: '',
      code: '',
      coming: true,
      demoAvaliable: false
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
          {portfolios.map(({ id, src, demo, code, coming, description, demoAvaliable }) => (
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
                    {demoAvaliable &&
                      <button
                        onClick={() => {
                          window.open(`${demo}`, '_blank')
                        }}
                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                    }
                    <button
                      onClick={() => {
                        window.open(`${code}`, '_blank')
                      }}
                      className={`${demoAvaliable ? 'w-1/2' : ''} px-6 py-3 m-4 duration-200 hover:scale-110`}>Repositório</button></>
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