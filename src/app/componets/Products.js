import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';



export default function Products() {
  

  const data = [
    {
      "id": 0,
      "name": "Aqua Natural Evro",
      "description": "Aqua Natural Evro, yüksek performansıyla suyun doğallığını koruyarak mutfağınıza getirir.",
      "price": 2490,
      "image": "/evropompasız.png"
    },
    {
      "id": 1,
      "name": "Aqua Natural Bolero",
      "description": "Aqua Natural Bolero, doğallığı koruyan bir su arıtma cihazı için Bolero doğru tercih..",
      "price": 2390,
      "image": "/boleropompasız.png"
    },
    {
      "id": 2,
      "name": "Aqua Natural Krs",
      "description": "Aqua Natural Krs, zararlı maddeleri arındıran bir su  için doğru tercih Krs arıtma cihazı.",
      "price": 2490,
      "image": "/krspompasız.png"
    },
    {
      "id": 3,
      "name": "Aqua Natural Ecoevro",
      "description": "Aqua Natural Ecoevro,Su kaynaklarınızı sağlıklı şekilde kullanmanızı sağlar.",
      "price": 2390,
      "image": "/ecoevropompalı.png"
    },
    {
      "id": 4,
      "name": "Aqua Natural Ecobolero",
      "description": "Aqua Natural Ecobolero, Suyunuzu zararlı maddelerden arındırarak verir.",
      "price": 2290,
      "image": "/ecoboleropompasız.png"
    },
    {
      "id": 5,
      "name": "Aqua Natural Evro",
      "description": "Aqua Natural Evro, yüksek performansıyla suyun doğallığını koruyarak mutfağınıza getirir..",
      "price": 2490,
      "image": "/evropompalı.png"
    },
    {
      "id": 6,
      "name": "Aqua Natural Bolero",
      "description": "Aqua Natural Bolero, doğallığı koruyan bir su arıtma cihazı için Bolero doğru tercih.",
      "price": 2390,
      "image": "/boleropompalı.png"
    },
    {
      "id": 7,
      "name": "Aqua Natural Krs",
      "description": "Aqua Natural Krs, Suyun doğal haliyle kalmasını sağlarken, zararlı maddeleri filtreler.",
      "price": 2490,
      "image": "/krspompalı.png"
    },
    {
      "id": 8,
      "name": "Aqua Natural Eco One",
      "description": "Aqua Natural Eco One,Yüksek performansıyla maddelerden arındırır.",
      "price": 2290,
      "image": "/ecoonepompalı.png"
    },
    {
      "id": 9,
      "name": "Aqua Natural Eco One",
      "description": "Aqua Natural Eco One,Yüksek performansıyla suyunuzu arındırırr.",
      "price": 2290,
      "image": "/ecooneblue.png"
    },
    {
      "id": 10,
      "name": "Aqua Natural Açık Kasa",
      "description": "Aqua Natural Açık Kasa suyu tüm doğallığıyla çeşmenize getirir.",
      "price": 2290,
      "image": "/ak2.jpg"
    }
  ];
  
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
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
    <div className='w-100'>
    <div className='w-[98%]  h-120  text-center' id='products'>
       <h1 className=' text-xl lg:text-3xl mt-8 text-semibold'>Arıtma Cihazlarımız</h1>
       <div className='mt-4 md:mt-8'>
       <Slider className='px-[60px] ' {...settings}>  
       {
    data.map((e) => 
    <div className='border-2 h-[380px] w-auto px-4  my-10 
    transform transition duration-500 hover:scale-110 hover:border-primary
    'key={e.id}>
      
      <Image src={e.image}
 alt="img" width={150} height={150} className='  mx-auto my-4 ' />
{/* w-[120px] h-[120px] md:w-[180px] md:h-[180px]  */}

        <p className='w-full border-b-2 m-auto text-lg'>{e.name}</p> 
        <p className=' text-xs md:text-sm  h-auto pt-2 text-boneText '>{e.description}</p>

        <p className='flex justify-around  mt-[45px] md:mt-6'>

        <p className='sm:text-[14px] lg:text-sm hover:text-primary   hover:scale-110 '>
        <a className='flex justify-betwen text-sm md:text-md' href={`./product/${e.id}`}>Daha Fazla</a></p> 
        {e.price}₺</p>
        </div>
    )
}
</Slider>
      </div>
    </div>
    </div>
  )
}