//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
<<<<<<< HEAD
import Form from './components/GetInTouch'
import Footer from './components/footer'
=======
import Navbar from './components/Navbar'
import Events from './components/Events'
>>>>>>> 7a6f6c6452df9d2985594175bfbda01d39cf1d45


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
<<<<<<< HEAD
     <Form />
     <Footer />
=======
     <Events/>
     </div>
     
     
     
     
>>>>>>> 7a6f6c6452df9d2985594175bfbda01d39cf1d45
    </div>
  )
}

export default Layout