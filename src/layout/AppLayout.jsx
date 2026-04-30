import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

const AppLayout = ({children}) => {
  return (
   <>
    <Navbar/>
   {children}
   <Footer/>
   
   
   </>
  )
}

export default AppLayout