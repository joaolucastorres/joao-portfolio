import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'
import java from '../assets/java.png'
import kotlin from '../assets/kotlin.png'
import spring from '../assets/spring.png'


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src: github,
      title: 'GitHub',
      style: 'shadow-white'
    },
    {
      id: 6,
      src: react,
      title: 'React',
      style: 'shadow-cyan-500'
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-300'
    },
    {
      id: 8,
      src: node,
      title: 'Node',
      style: 'shadow-green-500'
    },
    {
      id: 9,
      src: java,
      title: 'Java',
      style: 'shadow-orange-500'
    },
    {
      id: 10,
      src: kotlin,
      title: 'Kotlin',
      style: 'shadow-purple-500'
    },
    {
      id: 11,
      src: spring,
      title: 'SpringBoot',
      style: 'shadow-green-400'
    }
  ]

  return (
    <div name='habilidades' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Habilidades</p>
          <p className='py-6'>Essas são as tecnologias com que trabalho</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={'rounded-lg hover:scale-105 duration-500 py-4 shadow-md' + ' ' + style}>
                <img
                  src={src}
                  alt={title}
                  className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience