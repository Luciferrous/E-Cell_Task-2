import React from 'react'
import data from '../assets/Images/stats_data'

const Stats = () => {
  return (
    <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/644/305/118/pattern-black-gradient-texture-wallpaper-thumb.jpg')] bg-cover h-screen bg-fixed p-5 z-20 flex flex-col items-center justify-center">
       
    {data.map((items)=>
    {
        return(
        <>
        <div className='w-32 h-32 bg-white m-2 rounded-lg hover:scale-110'>
           <div className='h-20 flex justify-center items-center'><img className="w-10 h-10" src={items.image}></img></div>
           <div className='flex justify-center items-center font-bold'><p className='text-md'>{items.data}</p></div>
           <div className='flex justify-center items-center'><p>{items.name}</p></div>
        </div>
        </>
        )
    })}
      
    </div>
  )
}

export default Stats