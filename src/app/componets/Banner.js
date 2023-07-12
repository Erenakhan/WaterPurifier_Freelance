import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className="w-full  relative">
    <img src="/banner.png" alt="banner" className='w-full h-full ' />
    <div className="container   text-white absolute z-20 w-1/2 text-center left-0 top-0 h-full text-sm md:text-3xl  xl:text-5xl flex justify-center items-center
    ">Sağlığınız İçin <br/>Aqua Natural'i seçin </div>
</div>
  )
}
