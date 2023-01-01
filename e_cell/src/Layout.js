//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Navbar from './components/Navbar'


const Layout = () => {
  return (
    <div className='w-full h-screen'>
     <div className='sticky top-0'>
      <Navbar/>
     </div>
     
     
     <div className=''>
     <Home/>
     <Stats/>
     <About/>
     </div>
     
    </div>
  )
}

export default Layout