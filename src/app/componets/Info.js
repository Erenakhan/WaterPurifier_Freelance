import React from 'react'
import Image from 'next/image'

export default function Info() {
  return (
    <div className='h-[700px] md:h-[430px] mx-10 my-[120px]  flex md:justify-between flex-col md:flex-row'>

       <div  className='w-full md:w-1/2 md:ml-0 h-full my-auto flex align-center'>


          <Image
            alt="info"
            loading="lazy"
            width={720}
            height={420}
            src="https://www.uplifers.com/app/uploads/2016/10/su-icen-kadin.jpg"
            style={{ objectFit: "contain" }}
          />

       </div>
        <div className='w-full md:w-1/2 md:mr-0 ml-0 h-[550px] p-10 '>
            <div className='md:m-12 mx-2 my-2'>
            <h1 className='mb-8 text-lg md:text-xl lg:text-2xl'>
                Neden Aqua Natural Arıtma Cihazı Almalıyım?
            </h1>
           <p className='sm:text-sm lg:text-lg'>
           Günümüzde, fabrikalarda dahi hazır su üretimi için arıtma cihazları kullanılırken, neden kendi arıtma sistemimizi kullanmayı tercih etmiyoruz ve arıtılmış suya ekstra ücret ödüyoruz? Kendi arıtma sistemimizle suyu anında arıtarak, taze içimli ve içinde herhangi bir şüpheye yer vermeyen su elde edebiliriz. Bu şekilde, suyumuzun kalitesini tamamen kontrol ederken ek bir maliyet ödemek zorunda kalmayız.
           </p>
            </div>
        </div>
    </div>
  )
}
