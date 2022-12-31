//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'


const Layout = () => {
  return (
    <div className='w-full h-screen'>
     <div className='sticky top-0'>
      
     </div>
     
     <Home/>
     <Stats/>
    </div>
  )
}

export default Layout