import React from 'react'
import data from '../api/data'
import Slider from "react-slick";

export default function Products() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='w-auto h-120  text-center' id='products'>
       <h1 className=' text-xl lg:text-3xl mt-8 text-semibold'>Arıtma Cihazlarımız</h1>
       <div className='mt-4 md:mt-8'>
       <Slider className='-px-[60px]' {...settings}>
       {
    data.map((e) => 
    <div className='border-2 h-[380px] px-4  my-10 
    transform transition duration-500 hover:scale-110 hover:border-primary
    'key={e.id}>
      
        <img src="{e.image}" alt="img" className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] border-2 mx-auto my-4 ' />
        <p className='w-full border-b-2 m-auto text-lg'>{e.name}</p> 
        <p className='text-sm  h-14 pt-2 text-boneText'>{e.description}</p>

        <p className='flex justify-around  mt-[65px] md:mt-6'>

        <p className='sm:text-xs lg:text-sm hover:text-primary   hover:scale-110 '>
        <a className='flex justify-betwen' href={`./product/${e.id}`}>Daha Fazla</a></p> 
        {e.price}₺</p>
        </div>
    )
}
</Slider>
      </div>
    </div>
  )
}