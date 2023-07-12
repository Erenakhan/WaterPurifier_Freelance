
"use client";
import Link from 'next/link';
//components// 
import React from 'react'
import Header from './componets/Header'
import Banner from './componets/Banner'
import Products from './componets/Products'
import Services from './componets/Services'
import Footer from './componets/Footer'
import Info from './componets/Info'
import Sub from './componets/Sub'
//whatsapp/services
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
   return (
    <main>
    <Header  />
    <Banner />
    <Products />
    <Info />
    <Services />
    <Sub />
    <Footer />
    <FloatingWhatsApp
     phoneNumber="+9005060593069"
      accountName="Aqua Natural Su Arıtma"
      avatar="https://aquanatural.net/_next/image?url=%2Flogo.png&w=256&q=75"
      statusMessage="1dk içinde yanıt"
      chatMessage="Merhaba Efendim, Size Nasıl Yardımcı Olabiliriz?"/>
  </main>

  )
}
