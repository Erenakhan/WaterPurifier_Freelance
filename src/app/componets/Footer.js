import React from 'react'
import { BiPhone } from 'react-icons/Bi';
import { AiOutlineMail } from 'react-icons/Ai';
import { ImLocation } from 'react-icons/Im';
import { AiFillFacebook } from 'react-icons/Ai';

export default function Footer() {
  return (
    <div className='h-auto'>
    <div className='w-full gap-[48px] md:gap-0 h-auto bg-last flex  flex-col-reverse md:flex-row py-4 px-5' id='footer sm:mx-auto'>
      <div className=' w-auto md:w-1/3 h-full pt-5 flex justify-between'>
        <img src='/logo.png' alt='logo' className=' w-42 h-40 '/>
        <p className='text-white pt-2'> <span className='sm:text-md text-xl'>Aqua Natural</span>, 2017 yılından bu yana Gaziantep'te su arıtma teknolojileri konusunda öncülük etmekteyiz. Yüksek kaliteli ürünlerimizle tüketicilere doğal ve saf su sağlamaktayız. Güvendiğiniz marka, Aqua Natural.</p>
      </div>
      <div className='w-auto md:w-1/3  h-full md:border-l-2 md:border-r-2   text-center text-white'>
        <h1 className='text-2xl border-b-2 w-fit  m-auto '>Bize ulaşın</h1>
         <div className='flex justify-center mt-4'>
           <BiPhone className='w-[30px] h-[30px] mt-1 ' /> 
           <p className='text-md flex align-center w-[150px] h-[50px] pt-2 ml-2 '>0538 581 4225</p>
         </div>
         <div className='flex justify-center mt-1'>
           <BiPhone className='w-[30px] h-[30px] ' /> 
           <p className='text-md flex align-center w-[150px] h-[50px] pt-2 ml-2 '>0506 059 3069</p>
         </div>
         <div className='flex justify-center  mt-1'>
           <AiOutlineMail className='w-[30px] h-[30px] ' /> 
           <p className='text-md flex align-center w-[150px] h-[50px] pt-2 ml-2 '>info@aquanatural.com</p>
         </div>
        
      </div>
      <div className=' flex flex-col justify-center items-center w-auto md:w-1/3  h-full md:pt-12 pl-2 '>
        
      <div className='w-3/4 h-1/3 ml-0 mb-0   flex flex-row items-center'>
      <AiFillFacebook className='text-white text-5xl hover:text-secondary hover:scale-105' />
        <h3 className='text-white   h-fit text-md md:ml-2'>
          Bizi Sosyal Medyadan takip edin</h3><a href='#' className='ml-2'></a>
      </div>
      <div className='w-3/4 h-1/3 mt-5  flex items-center'>

      <ImLocation className='text-white text-7xl' /><h3 className='text-white  h-fit text-md'>Belkıs mah. 08016 nolu cd. no 10/b Şehitkamil/Gaziantep</h3>

      </div>
      </div>
    </div>
    <div className='w-full h-7 bg-foot text-white flex items-center justify-center text-center text-sm'>Copyrights © 2023<a href="#">Aqua Natural</a>. Tüm Hakları Saklıdır.</div>
    </div>
  )
}
