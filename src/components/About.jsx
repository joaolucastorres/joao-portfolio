import React from 'react'

const About = () => {
  return (
    <div
      name='sobre'
      className='w-full bg-gradient-to-b from-gray-900 to-black text-white h-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Sobre mim
          </p>
        </div>
        <p className='text-xl mt-10'>
          Meu nome é João Lucas, sou desenvolvedor full stack, atualmente cursando o 4º período do curso de Análise e Desenvolvimento de Sistemas na Universidade PUC Minas. Tenho paixão por desenvolvimento de software e estou comprometido em me tornar um profissional de alto nível.
        </p>

        <br />

        <p className='text-xl'>
          Minhas habilidades de desenvolvimento incluem Javascript/TypeScript e ReactJS para o front-end, bem como Java/Kotlin e Spring Boot para o back-end. Estou constantemente aprimorando meu conhecimento e habilidades para criar aplicações de qualidade e impacto.
        </p>

        <br />

        <p className='text-xl'>
          Estou em um emocionante período de transição de carreira e estou ávido para encontrar minha primeira oportunidade na área de desenvolvimento. Estou disposto a enfrentar qualquer desafio que me permita crescer e contribuir para projetos significativos.
        </p>
      </div>
    </div>
  )
}

export default About