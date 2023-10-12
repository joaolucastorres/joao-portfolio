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

        <p className='text-xl'>
          Tenho conhecimento nos fundamentos de análise, documentação e implementação de softwares, conceitos como padrão MVC, modularização e abstração de dados, testes unitários, diagramas UML, especificação e gerenciamento de requisitos, experiência em trabalho com metodologias ágeis (Scrum), fluxo de trabalho Kanban e versionamento com o Git e GitHub.
        </p>

        <br />

        <p className='text-xl'>
          Conhecimento em como projetar o armazenamento e o tratamento dos dados e realizar sua implementação em banco de dados relacionais e não relacionais, também estou estudando e me adaptando aos princípios SOLID, para melhorar e agregar melhor qualidade e padronização ao meu trabalho.
        </p>

        <br />

        <p className='text-xl'>
          Tenho experiência em linguagens e ferramentas de trabalho como HTML, Tailwind CSS, Sass, Javascript, TypeScript, React, Java, Kotlin, Spring Boot, MySQL, MongoDB.
          Conhecimento em rede de computadores, hardware, sistemas operacionais Linux e Windows.
        </p>

        <br />

        <p className='text-xl'>
          Focado e responsável busco sempre me aperfeiçoar e aprender com novas tecnologias e desafios durante minha jornada acadêmica e profissional. Sempre aprimorando minha visão analítica e pensamento crítico procuro entregar com eficiência, qualidade e agilidade as tarefas e projetos que executo.. Estou disposto a enfrentar qualquer desafio que me permita crescer e contribuir para projetos significativos.
        </p>
      </div>
    </div >
  )
}

export default About