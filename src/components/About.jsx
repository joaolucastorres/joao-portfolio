import React from 'react'

const About = () => {
  return (
    <div
      name='sobre'
      className='w-full bg-gradient-to-b from-gray-900 to-black text-white h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Sobre mim
          </p>
        </div>
        <p className='text-xl mt-10'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nostrum quo delectus deleniti dolorem, harum nemo architecto, corrupti ducimus laboriosam dolore aut? Ipsum, explicabo vero delectus sapiente odit omnis facere perferendis exercitationem eos animi accusamus officiis soluta labore similique, ut dicta assumenda deserunt itaque recusandae saepe ex repellendus. Consequatur, illo.
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem unde nisi nesciunt? Obcaecati in laudantium hic porro voluptatum molestias soluta facilis vel, consequatur similique suscipit, error tempora atque veritatis odio. Dolor commodi nesciunt consequatur eos impedit eligendi, itaque, esse modi corrupti sapiente debitis! Saepe enim necessitatibus autem! Incidunt, neque?
        </p>
      </div>
    </div>
  )
}

export default About