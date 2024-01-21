import type { Metadata } from 'next'
import '@/assets/styles/globals.css'
import {Navbar,Footer} from '@/components'
import {easeInOut, motion} from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PageButton from '@/components/PageButton';

import { Provider } from 'react-redux';
import {store} from '@/redux/apps/store'
import Layout from '@/components/Layout';
export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Mustafa Masoud ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full max-w-[1440px] mx-auto px-6">
        <Layout>


        <Navbar/>
        <PageButton/>
        {children}
        <Footer/>
     
        </Layout>


    
        </body>
    </html>
  )
}
