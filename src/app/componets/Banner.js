import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className="w-full h-[150px] md:h-[180px] lg:h-[300px] relative">
      <Image
      loading='lazy'
        src="/banner.png"
        alt="banner"
        fill={true}
        cover={true}
        className='w-full h-full'
      />
    <div className="container broder-2  text-white absolute z-20 w-1/2 text-center left-0 top-0 h-full text-lg  md:text-3xl  xl:text-5xl flex justify-center items-center
    ">Sağlığınız İçin <br/>Aqua Natural&apos;i seçin</div>
</div>
  )
}
