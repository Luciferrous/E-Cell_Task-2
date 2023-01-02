//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Form from './components/GetInTouch'
import Get from './components/Get'
import Navbar from './components/Navbar'
import Events from './components/Events'



const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col bg-back '>
     
     <div className='sticky'>
     <Navbar/>
     </div>

     <div className='w-full'>
     
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <Form />
     <Get/>
     </div>
     
     

    </div>
  )
}

export default Layout