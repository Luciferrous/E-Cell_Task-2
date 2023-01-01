import React ,{useState}from 'react'

const  About = () =>
{
  const [read,setRead] = useState(true)
  

  const readmore=()=>{
     setRead(!read)
  }
  return (

    <>
       <div className='bg-[url("https://c4.wallpaperflare.com/wallpaper/885/452/864/wireframe-low-poly-geometry-abstract-wallpaper-preview.jpg")] h-[8701x] bg-cover bg-fixed'>
        <div className='About bg-black bg-opacity-60 '>

        <div className='p-2 flex flex-col justify-center'>

              <div className='h-80 bg-cover bg-center bg-[url("https://ecellmnnit.com//icons/AboutUs/rectangle.png")] border-2 rounded-xl ' >
                  
              </div>

              <div className='flex flex-col items-center'>
                <p className='text-xl font-bold text-white p-2 animate-pulse '>About Us</p>

                <div className='border-2 text-white mr-2 ml-2 mt-2 mb-8 p-2 text-justify rounded-xl'>
                    <p>Entrepreneurship Cell started its functioning in October 2014 to inculcate the passion and spirit among students to pursue entrepreneurship and bring together the hustling minds having innovative solutions to the common societal problems and create scalable business ideas. E-Cell MNNIT comprises content, design, web, marketing, videography and networking teams for the collaborative and holistic work approach. E-Cell MNNIT actively hosts innumerous events and acts as a catalyst between young minds and brilliant ideas.</p>
                    <p className={`${read?'text-sm':'text-[0px]'} transfrom duration-500`}>Apart from this ECell MNNIT organizes RENAISSANCE, it's annual flagship entrepreneurial summit that provides a platform for aspiring entrepreneurs to encourage the entrepreneurial journey of translating thoughts into action through events like E PLAN, E TALK, PANEL DISCUSSION, MOCK IPL AUCTION, GAME OF STOCKS, INTERNSHIP FAIR and BUSINESS QUIZ.</p>
                
                  <div className='flex justify-center items-center'>
                      <button onClick={readmore} className='text-sm bg-gray-900 text-white rounded-lg pl-2 pr-2 pt-1 pb-1 cursor-pointer'>Read {!read?'More':'Less'}</button>
                  </div>
                    
                
                </div>

                
                
              </div>
           
               

        </div>

        </div>
       </div>
    </>
    
  )
}

export default About