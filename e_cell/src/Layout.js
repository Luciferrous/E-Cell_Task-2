//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Form from './components/GetInTouch'
import Footer from './components/footer'

import Navbar from './components/Navbar'
import Events from './components/Events'



const Layout = () => {
  return (
    <div className='w-full h-screen flex flex-col relative scrollbar-hide'>
     
     <div className='sticky top-0 h-20'>
       <Navbar/>  
     </div>

     <div className=''>
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <Form />
     <Footer />

     
     </div>
     
     

    </div>
  )
}

export default Layout