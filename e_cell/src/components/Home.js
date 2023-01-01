import React,{useEffect,useState} from 'react'
import {BiMenu,BiChevronsDown} from "react-icons/bi";
import { AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillTwitterCircle } from "react-icons/ai";
import menu from '../assets/Images/menu';


const Home = () => {
   
    const [menu , setmenu] = useState(false)

  function clicked()
  {
    setmenu(!menu)
    console.log("clicked")
  }
 
  return (

<>
    <div className=''>
    
    <div className='Navbar  fixed top-0  bg-teal-300 w-full h-16 drop-shadow-2xl flex justify-between '>
         
         <div className='flex items-center p-2'>
           <img className='w-10 rounded-full hover:scale-110' src='https://ecellmnnit.com//images/footer/ECellLogo.jpeg'></img>
         </div>

         <div className=' items-center gap-5 p-2 hidden  lg:flex flex-row' >
               <p>Home</p>
               <p>Event</p>
               <p>Startup</p>
               <p>Webinar</p>
               <p>Team</p>
               <p>Contact</p>
         </div>
         
       

         <div className='flex items-center text-2xl p-4 cursor-pointer transition ease-in-out delay-150      lg:hidden' onClick={clicked}>
          <div className='p-2 hover:bg-black rounded-full  hover:text-gray-100'><BiMenu/></div>
          
         </div>
         
       </div>
    
       
       
       <div className="mt-16 bg-[url('https://c4.wallpaperflare.com/wallpaper/413/925/249/minimalism-abstract-pattern-digital-art-wallpaper-preview.jpg')] h-[900px] bg-cover bg-fixed flex flex-col  items-center">
       
  
        <div className='Main Icon h-60 w-40 flex justify-center items-center'>
         <img className="w-40 rounded-[200px]" src='https://ecellmnnit.com//images/footer/ECellLogo.jpeg'></img>
        </div>
       

        <div className='Home w-full'> 
          
          <div className='Main Text text-white ml-5 mr-5 h-[250px] flex flex-col justify-center items-center '>
      
             <p className={`text-[25px]`}>Unfolding Advancement</p>
             <p className='text-[38px] font-bold underline underline-offset-8'>Entrepreneurship Cell</p>
             <p className='text-[25px] font-bold mt-5'>MNNIT ALLAHABAD</p>
     

          </div>

          <div className='h-[325px] flex justify-center items-center'>

             <div className='Ren bg-gray-800 w-3/4 h-60 m-2 rounded-lg flex flex-col  items-center'>
                   <div className='text-[20px] h-20 flex items-center text-white font-bold font-mono'>
                      Registeration Open
                   </div>

                  <div className=' h-40 '>
                     <img className='w-44' src="https://renaissance.ecellmnnit.com/Images/LOGOPNGWEB-01.png"></img>
                  </div>

                  <div className='flex items-center h-20 text-xl'>
                   <p className='bg-[url("https://c4.wallpaperflare.com/wallpaper/316/72/963/lion-art-vector-lines-wallpaper-preview.jpg")]  text-white rounded-full pt-1 pb-1 pr-2 pl-2 font-bold hover:scale-110'>Register Now</p>
                  </div>
             </div>
  
          </div>

          <div className='text-white text-[40px]   flex justify-center items-center  animate-bounce'>
            <div className='bg-teal-300 rounded-full '>
               <div className='bg-black rounded-full m-1 cursor-pointer hover:bg-white hover:text-black'>
                  <BiChevronsDown/>
                </div>
            </div>
          </div> 

        </div>


       </div>


       <div className={`Sidebar Menu fixed top-16 right-[-20px]  bg-gradient-to-r from-cyan-400 to-teal-400 drop-shadow-2xl  rounded-lg ${menu ? 'w-3/4 m-2 h-[600px] p-1 ':'w-0 h-[200px] p-0'} transform  duration-500 `}>

         
          <div className='w-full  h-full text-white bg-gray-900 p-4 rounded-lg'>
            
            <div className='Main Icon h-60  flex justify-center items-center'>
               <img className="w-40 rounded-[200px]" src='https://ecellmnnit.com//images/footer/ECellLogo.jpeg'></img>
            </div>

            <div className={`h-28 text-[30px] gap-5 flex justify-around items-center ${menu ?'':'hidden'} `}>
              <p className='cursor-pointer hover:scale-110'><AiFillFacebook/></p>
              <p className='cursor-pointer hover:scale-110'><AiFillInstagram/></p>
              <p className='cursor-pointer hover:scale-110'><AiFillLinkedin/></p>
              <p className='cursor-pointer hover:scale-110'><AiFillTwitterCircle/></p>
            </div>
            
            

            <div className={`h-[200px] flex flex-col justify-center items-start ${menu ? '' : 'hidden'}`}>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Home</p>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Event</p>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Startup</p>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Webinar</p>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Team</p>
            <p className='pt-2 pb-1 hover:bg-gray-400 w-full rounded-lg p-2'>Contact</p>
            </div> 
          </div>
          
          
       
       </div>

    </div>
</>
  )
}



export default Home