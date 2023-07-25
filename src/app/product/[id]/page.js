"use client"
import { React } from 'react';
import HeaderP from '../../componets/HeaderP';
import Footer from '../../componets/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useState } from 'react';

export default function ProductPage({ params }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  const data = [
    {
      "id": 0,
      "name": "Aqua Natural Evro",
      "description": "Aqua Natural Evro, yüksek performansıyla suyun doğallığını koruyarak mutfağınıza getirir.",
      "price": 2690,
      "image": "/evropompasız.png"
    },
    {
      "id": 1,
      "name": "Aqua Natural Bolero",
      "description": "Aqua Natural Bolero, doğallığı koruyan bir su arıtma cihazı için Bolero doğru tercih..",
      "price": 2590,
      "image": "/boleropompasız.png"
    },
    {
      "id": 2,
      "name": "Aqua Natural Krs",
      "description": "Aqua Natural Krs, zararlı maddeleri arındıran bir su  için doğru tercih Krs arıtma cihazı.",
      "price": 2690,
      "image": "/krspompasız.png"
    },
    {
      "id": 3,
      "name": "Aqua Natural Ecoevro",
      "description": "Aqua Natural Ecoevro,Su kaynaklarınızı sağlıklı şekilde kullanmanızı sağlar.",
      "price": 2590,
      "image": "/ecoevropompalı.png"
    },
    {
      "id": 4,
      "name": "Aqua Natural Ecobolero",
      "description":"Aqua Natural Ecobolero,Suyunuzu zararlı maddelerden arındırır.",
      "price": 2590,
      "image": "/ecoboleropompasız.png"
    },
    {
      "id": 5,
      "name": "Aqua Natural Evro",
      "description": "Aqua Natural Evro, yüksek performansıyla suyun doğallığını koruyarak mutfağınıza getirir..",
      "price": 2690,
      "image": "/evropompalı.png"
    },
    {
      "id": 6,
      "name": "Aqua Natural Bolero",
      "description": "Aqua Natural Bolero, doğallığı koruyan bir su arıtma cihazı için Bolero doğru tercih.",
      "price": 2590,
      "image": "/boleropompalı.png"
    },
    {
      "id": 7,
      "name": "Aqua Natural Krs",
      "description": "Aqua Natural Krs, Suyun doğal haliyle kalmasını sağlarken, zararlı maddeleri filtreler.",
      "price": 2690,
      "image": "/krspompalı.png"
    },
    {
      "id": 8,
      "name": "Aqua Natural Eco One",
      "description": "Aqua Natural Eco One,Yüksek performansıyla maddelerden arındırır.",
      "price": 2490,
      "image": "/ecoonepompalı.png"
    },
    {
      "id": 9,
      "name": "Aqua Natural Eco One",
      "description": "Aqua Natural Eco One,Yüksek performansıyla suyunuzu arındırırr.",
      "price": 2490,
      "image": "/ecooneblue.png"
    },
    {
      "id": 10,
      "name": "Aqua Natural Açık Kasa",
      "description": "Aqua Natural Açık Kasa suyu doğallığıyla çeşmenize getirir.",
      "price": 2490,
      "image": "/ak2.jpg"
    }
  ];
  

  const item = data.find((e) => e.id === parseInt(params.id));

  console.log(selectedValue);

  return (
    <div>
      <HeaderP />
      <div className='h-auto md:h-[580px] w-100 px-5 py-2 border-t-2 border-primary'>
        {item ? (
          <>
            <p className='text-boneText'>
              <Link href='../'>Arıtma cihazları</Link>
              <span className='text-secondary text-xl'> &gt;</span> {item.name}
            </p>
            <div className='w-full h-auto md:h-[480px]  flex flex-col md:gap-0 gap-7  md:justify-center md:flex-row '>
              <div className='md:w-2/5 h-full ml-0  md:border-r-2'>
                <Image src={item.image} width={400} height={400} alt='product-img' className='m-auto my-7 md:my-0 md:mt-7' />
              </div>
              <div className='md:w-1/2 h-full mr-0  px-5'>
                <h1 key={item.id} className='text-2xl md:text-3xl mt-0 mb-5'>
                  {item.name}
                </h1>
                <p className='text-boneText  mb-4'>{item.description}</p>
                <ul className='mt-2'>
                <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 2 yıl Garantili</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 12 inch Inline 5 
                      Mikron Sediment Filtre</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 12 inch Inline GAC Filtre</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 12 inch Inline 1 
                      Mikron Sediment Filtre</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 75 GPD RO Membran
                      </li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 10 Inch Inline Mi
                      neralli Son Karbon Filtre</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span>  8/12 Litre Krom Tank
                        </li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span>  Tank Ebadı : Çap 
                      24,4 cm, Boy 36,6 cm  </li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span>  Cihaz Ebadı :400x
                      270x385mm</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> Brüt Ağırlık : 8,
                      5 Kg</li>
                </ul>
              </div>
              <div className='md:w-1/5 mt-5 h-fit md:mt-[270px] px-5 md:px-0'>
                <h1 className='mx-auto text-xl semibold text-center text-larger mb-2'>Tank-Pompa Seçiniz..</h1>
                <form>
                  <label htmlFor='underline_select' className='sr-only'>
                    Underline select
                  </label>
                  <select
                    id='underline_select'
                    className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value='' disabled selected>
                      Tank Seçimi..
                    </option>
                    <option value=''>8lt Krom Tank</option>
                    <option value='true'>12lt Krom Tank (+500₺)</option>
                
                  </select>
                </form>

                {/* pompa seçimi */}
                <form className='mb-[40px]'>
                  <label htmlFor='underline_select' className='sr-only'>
                    Underline select
                  </label>
                  <select
                    id='underline_select'
                    className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
                    value={selectedValue2}
                    onChange={handleChange2}
                    defaultValue=''

                  >
                    <option value='' disabled selected >
                      Pompa Seçimi..
                    </option>
                    <option value="">Pompasız</option>
                    <option value='true'>Pompalı (+700₺)</option>
                
                  </select>
                </form>

                <div id='price' className='w-full h-[110px] text-2xl '>
                  Fiyat: {(selectedValue && selectedValue2) ? item.price + 1200 : selectedValue ? item.price + 500 : selectedValue2 ? item.price + 700 : item.price}₺
                  <p className='text-boneText  text-[16px] md:text-lg mt-3'>
                    <span className='text-secondary text-xl'> &gt;</span> Kredi Kartına 9 Taksit ve
                  </p>
                  <p className='text-boneText text-[16px] md:text-lg '>
                    <span className='text-secondary text-xl'> &gt;</span> Açık Hesap Seçenekleri ile
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Ürün bulunamadı...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
