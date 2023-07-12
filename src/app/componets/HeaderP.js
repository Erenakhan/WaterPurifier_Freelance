import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
 
export default function Header() {
  return (
    <div className= 'w-full h-25 flex justify-between bg-white  border-b-1'>
      <div className='flex items-center text-center m-2 '> 
              <Link href='/' >
                <Image src="/logo.png" alt="logo" width="150" height="150"  className="w-[85px] h-[80px] md:h-[120px] md:w-[130px] lg:h-[150px] lg:w-[160px] "  />  
              </Link>
            <h1 className=' hidden md:block md:text-lg lg:text-xl  xl:text-2xl  text-primary text-bold'>Aqua Natural Su Arıtma Sistemleri</h1>
      </div>
      <div>
      <div className='flex justify-center space-x-4 md:space-x-12 
      text-[10px] md:text-lg lg:text-xl xl:text-2xl my-10 md:my-20 mr-10 '>
        <a href="../#products" className=" group transition duration-300">
          Ürünlerimiz
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-third"></span>
          </a>  
        <a href="../#services" className="group transition duration-300">
          Hizmetlerimiz
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-third"></span>
          </a>  
        <a href="../#footer" className="group transition duration-300">
          Bize Ulaşın
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-third"></span>
          </a>  
        </div>
      </div>
    </div>
  )
}
