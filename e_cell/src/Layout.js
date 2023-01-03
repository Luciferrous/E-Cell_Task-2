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
import Testimonial from './components/Testimonial'
import data from './assets/startup'



const Layout = () => {

  var slide = document.getElementById('page')

  

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
     
     <div className='sticky top-0'>
     <Navbar/>
     </div>

     <div id="page" className='w-full'>
     
     <Home/>
     <Stats/>
     <About/>
     <Events/>
     <div className="flex justify-center items-center">
     <h1 className="text-blue font-bold text-3xl m-auto p-12 ">Startups By MNNITians</h1>
     </div>
     <div className="lg:flex w-full lg:basis-1/3 m-5 p-5 mb-10 pb-11">
     {cards}
     </div>
     
     </div>
     <Testimonial/>
     <Form />
     <Get/>
    </div>
  )
}

export default Layout