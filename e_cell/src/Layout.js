//Put all your pages here in decide order 

import React from 'react'

import Home from './components/Home'
import Stats from './components/stats'
import About from './components/about'
import Form from './components/GetInTouch'
import Get from './components/Get'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Startups from './components/Startup'
import data from './assets/startup'



const Layout = () => {

  var slide = document.getElementById('page')

  

  const cards=data.map(item=>{
    return (
      <Startups
       title={item.title}
       images={item.images}
       about={item.about} />
    )
  })
  return (
    <div className='w-full h-full flex flex-col bg-back relative '>
     
     <div className='sticky '>
     <Navbar/>
     </div>

     <div id="page" className='w-full'>
     
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <div className="flex justify-center items-center">
     <h1 className="text-white text-5xl m-auto p-12 ">Startups by MNNITians</h1>
     </div>
     {cards}
     <Form />
     <Get/>
     </div>
     
     

    </div>
  )
}

export default Layout