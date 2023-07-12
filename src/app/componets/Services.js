import React from 'react'
import { GiDrill } from 'react-icons/Gi';
import { BsWrenchAdjustable } from 'react-icons/Bs';


export default function Services() {
  return (
    <div className='h-[500px] mb-12 md:h-[350px] w-full gap-3  flex md:justify-around flex-col md:flex-row ' id='services'>
        <div className='mx-auto p-2 md:p-0 h-[140px] w-[275px] md:h-[275px] md:w-[275px] border-2 rounded-3xl flex flex-col bg-white'>
        <GiDrill className='h-[60px] w-[60px] md:h-[100px] md:w-[100px] mx-auto  md:mt-8 '/>
        <p className='md:mt-10 text-center text-2xl text-semibold '>Cihaz Montaj</p>
        <p className='mt-1 text-center text-sm'>Her çeşit Artıma Cihazı Montaj</p>
        </div>

        <div className='mx-auto p-2 md:p-0 h-[140px] w-[275px] md:h-[275px] md:w-[275px] border-2 rounded-3xl flex flex-col bg-white'>
        <BsWrenchAdjustable className='h-[60px] w-[60px] md:h-[100px] md:w-[100px] mx-auto  md:mt-8' />
        <p className='md:mt-10 text-center text-2xl text-semibold '>Teknik Servis</p>
        <p className='mt-1 text-center text-sm'>7/24 Teknik Servis Ekibimiz</p>
        </div>

        <div className='mx-auto p-2 md:p-0 h-[140px] w-[275px] md:h-[275px] md:w-[275px] border-2 rounded-3xl flex flex-col bg-white'>
        <img src="./filter.png" className='h-[65px] w-[65px] md:h-[100px] md:w-[100px] mx-auto  md:mt-8' />
        <p className='mt-1 md:mt-4 text-center text-2xl text-semibold '>Filtre Değişimi</p>
        <p className='mt-1 text-center text-sm'>Tüm Cihazların Filtre Değişimi</p>
        </div>
        
    </div>
  )
}
