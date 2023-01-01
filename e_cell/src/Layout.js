//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Navbar from './components/Navbar'
import Events from './components/Events'


const Layout = () => {
  return (
    <div className='w-full h-screen flex flex-col relative'>
     
     <div className='sticky top-0 h-20'>
       <Navbar/>  
     </div>

     <div className=''>
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     </div>
     
     
     
     
    </div>
  )
}

export default Layout