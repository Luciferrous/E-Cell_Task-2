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
  const cards=data.map(item=>{
    return (
    <div className="flex ">  <Startups
       title={item.title}
       images={item.images}
       about={item.about} /></div>
    )
  })
  return (
    <div className='w-full h-full flex flex-col bg-back relative '>
     
     <div className='sticky '>
     <Navbar/>
     </div>

     <div className='w-full'>
     
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <div className="flex justify-center items-center">
     <h1 className="text-white text-5xl m-auto p-12 mt-8 mb-5 font-bold pt-6">Startups by MNNITians</h1>
     </div>
     <div className="lg:flex w-full lg:basis-1/3 m-5 p-5 mb-10 pb-11">
     {cards}
     </div>
     <br />
     <Form />
     <Get/>
     </div>
     
     

    </div>
  )
}

export default Layout