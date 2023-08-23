import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aqua Natural Su Arıtma',
  description: "Gaziantep'in su arıtma markası",
  keywords: [
    'gaziantep su arıtma',
    'su arıtma gaziantep',
    'su arıtma',
    'artima',
    'su arırma cihazı',
    'su arirma cihazı',
    'arıtma sistemleri',
    'arıtma cihazları',
    'filtre',
    'arıtma filtreleri'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
