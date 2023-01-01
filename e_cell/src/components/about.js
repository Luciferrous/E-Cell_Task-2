import React ,{useState}from 'react'

function  About()
{
  const [read,setRead] = useState(true)
  

  const readmore=()=>{
     setRead(!read)
  }
  return (

    <>
      <div className='h-[900px]  bg-[url("https://c4.wallpaperflare.com/wallpaper/885/452/864/wireframe-low-poly-geometry-abstract-wallpaper-preview.jpg")] bg-fixed bg-cover opacity-100 flex flex-col  items-center'>
        <div className={` bg-black ${read?'h-[560px]':'h-[450px]'} flex flex-col justify-center items-center bg-opacity-60 p-2
        +-1 transform duration-300`}>
        <div className={` bg-white flex flex-col items-center p-2 ${read?'h-[700px]':'h-[436px]'} rounded-[100px]`}>
            <img className='w-[400px] rounded-t-[100px]' src='https://ecellmnnit.com//icons/AboutUs/rectangle.png '></img>
        
            <div className={`absolute flex flex-col items-center bg-gray-400 ${read?'h-[400px]':'h-72'} w-[400px] rounded-b-[100px]   m-20 z-20 translate-y-12 `}>
               <p className='text-xl font-bold text-white'>About Us</p>

               <div className='text-sm p-2 flex flex-col text-center transform duration-300'>
                <p>Entrepreneurship Cell started its functioning in October 2014 to inculcate the passion and spirit among students to pursue entrepreneurship and bring together the hustling minds having innovative solutions to the common societal problems and create scalable business ideas. E-Cell MNNIT comprises content, design, web, marketing, videography and networking teams for the collaborative and holistic work approach. E-Cell MNNIT actively hosts innumerous events and acts as a catalyst between young minds and brilliant ideas.</p>
                <p className={`${read?'text-sm':'text-[0px]'} transfrom duration-500`}>Apart from this ECell MNNIT organizes RENAISSANCE, it's annual flagship entrepreneurial summit that provides a platform for aspiring entrepreneurs to encourage the entrepreneurial journey of translating thoughts into action through events like E PLAN, E TALK, PANEL DISCUSSION, MOCK IPL AUCTION, GAME OF STOCKS, INTERNSHIP FAIR and BUSINESS QUIZ.</p>
               </div>
               <button onClick={readmore} className='text-sm bg-gray-900 text-white rounded-lg pl-2 pr-2 pt-1 pb-1 cursor-pointer'>Read More</button>
            
            </div>
        </div>
        
        
        

        </div>
      </div>
    </>
    
  )
}

export default About