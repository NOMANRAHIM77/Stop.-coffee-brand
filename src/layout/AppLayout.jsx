import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import ScrollToTop from '../components/ScrollToTop';

const AppLayout = ({children}) => {
  return (
   <>
   <ScrollToTop/>
    <Navbar/>
   {children}
   <Footer/>
   
   
   </>
  )
}

export default AppLayout