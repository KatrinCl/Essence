import React from 'react'
import { massage_list } from './../../public/assets.js'

const ExploreMassage = ({ massage, setMassage }) => {
  return (
    <div className='w-full flex flex-col items-center gap-6 md:mt-6'>
      <hr className='w-full max-w-5xl border-white/20' />

      <div className='flex flex-wrap justify-center gap-6 md:gap-10 text-center'>
        {massage_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setMassage(item.massage_name)
              localStorage.setItem('selectedMassage', item.massage_name)
            }}
            className='cursor-pointer'>
            <p className={`text-sm md:text-lg text-center max-w-[100px] md:max-w-[140px] leading-tight break-words ${massage === item.massage_name ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white/60 hover:text-yellow-400'}`}>{item.massage_name}</p>
          </div>
        ))}
      </div>

      <hr className='w-full max-w-5xl border-white/20' />
    </div>
  )
}

export default ExploreMassage
