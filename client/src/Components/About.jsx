import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[url('/spa.jpeg')] bg-cover bg-center flex">
      <div className='w-full flex justify-between items-start mt-22 md:mt-44'>
        <div className='text-white'>
          <h1 className='text-xl md:text-3xl mb-3 px-5 md:px-40 font-semibold'>Получи удовольствие, <br />насладись массажем</h1>

          <hr className='w-[150px] md:w-[500px] border-yellow-600 md:mb-3 border-1' />

          <p className='text-white/60 text-sm md:text-base px-5 md:px-40'>Прорабатываем все проблемные зоны</p>
        </div>

        <div className='text-white flex flex-col gap-2 text-sm md:text-lg text-right px-5 md:px-20'>
          <p>Натуральные масла и косметика</p>
          <p>Тематическая музыка</p>
        </div>
      </div>
    </div>
  )
}

export default About
