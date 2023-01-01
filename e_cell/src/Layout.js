//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Form from './components/GetInTouch'
import Footer from './components/footer'


const Layout = () => {
  return (
    <div className='w-full h-screen'>
     <div className='sticky top-0'>
      
     </div>
     
     <Home/>
     <Stats/>
     <About/>
     <Form />
     <Footer />
    </div>
  )
}

export default Layout