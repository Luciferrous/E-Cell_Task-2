//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'


const Layout = () => {
  return (
    <div className='w-full h-screen'>
     <div className='sticky top-0'>
      
     </div>
     
     <Home/>
     <Stats/>
     <About/>
    </div>
  )
}

export default Layout