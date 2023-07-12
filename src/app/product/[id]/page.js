import React from 'react'
import data from '../../api/data'
import HeaderP from '../../componets/HeaderP'
import Footer from '../../componets/Footer'
import Link from 'next/link';
import Image from 'next/image';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function ProductPage({params}){

  const item = data.find(e => e.id === parseInt(params.id));
  console.log(item);
  console.log(data);
  console.log(params);

  return (
    <div>
        <HeaderP />
        <div className='h-auto md:h-[580px] w-100 px-5 py-2  bg-bone border-t-2 border-primary'>
         {item ? (
          <>
          <p className='text-boneText'><Link href='../' >Arıtma cihazları</Link><span className='text-secondary text-xl'> &gt;</span> {item.name}</p>
          <div className='w-full h-auto md:h-[480px]  flex flex-col md:gap-0 gap-7  md:justify-center md:flex-row '>
              <div className='md:w-2/5 h-full ml-0  md:border-r-2'> 
                  <Image src={item.image} width={200} height={100}  alt='product-img' className='cover w-full h-full'/> </div>
              <div className='md:w-1/2 h-full mr-0  px-5'>
                  <h1 key={item.id} className='text-2xl md:text-3xl mt-0 mb-5'>{item.name}</h1>
                  <p className='text-boneText  mb-4'>{item.description}</p>
                  <ul className='mt-2'>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 2 yıl Garantili</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 12 inch Inline 5 
                      Mikron Sediment Filtre</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> 12 inch Inline GA
                      C Filtre</li>
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
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> {item.lt ? ' 8 Litre Krom Tank' : '12 Litre Krom Tank'}
                        </li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> Tank Ebadı : Çap 
                      24,4 cm, Boy 36,6 cm  </li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> Cihaz Ebadı :400x
                      270x385mm</li>
                    <li className='my-2'>
                      <span className='text-secondary text-lg md:text-xl'> &gt;</span> Brüt Ağırlık : 8,
                      5 Kg</li>
                  </ul>
              </div>
              <div className='md:w-1/5 mt-5 h-fit md:mt-[350px] px-5 md:px-0'>
              <div id='price' className='w-full h-[110px] text-2xl '>
              Fiyat: {item.price}₺ 
              <p className='text-boneText  text-[16px] md:text-lg mt-3'><span className='text-secondary text-xl'> &gt;</span> Kredi Kartına 9 Taksit ve</p>
              <p className='text-boneText text-[16px] md:text-lg '><span className='text-secondary text-xl'> &gt;</span> Açık Hesap Seçenekleri ile</p>
            </div>
              </div>
          </div>
          </>
        
          ) 
        
        : (
          <p>Ürün bulunamadı...</p>
        )}
  
        </div>
        <Footer />

    </div>
  )
}

