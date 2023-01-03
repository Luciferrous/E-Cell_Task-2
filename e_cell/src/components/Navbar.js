import React ,{useState}from 'react'
import { BiMenu } from "react-icons/bi";
import { AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillTwitterCircle } from "react-icons/ai";



function Navbar()
{
    const [menu , setmenu] = useState(false)

    function clicked()
    {
      setmenu(!menu)
      console.log("clicked")
    }   

    return(
        <>
       <div className='Navbar  fixed top-0  bg-blue w-full  drop-shadow-2xl flex justify-between '>
         
         <div className='ml-[20px] flex items-center p-2 '>
           <img className='w-10 rounded-full hover:scale-110' src='https://ecellmnnit.com//images/footer/ECellLogo.jpeg'></img>
         </div>

         <div className='mr-[20px] items-center gap-10 p-2 hidden  lg:flex flex-row  text-white' >
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Home</p>
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Event</p>
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Startup</p>
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Webinar</p>
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Team</p>
               <p className='hover:bg-gray-700 hover:rounded-lg p-1 drop-shadow-lg cursor-pointer'>Contact</p>
         </div> 
         
       

         <div className='flex items-center text-2xl p-4 cursor-pointer transition ease-in-out delay-150      lg:hidden' onClick={clicked}>
          <div className='p-2 hover:bg-black rounded-full  hover:text-gray-100'><BiMenu/></div>
          
         </div>
         
       </div>
       
       <div className={`Sidebar Menu fixed top-16 right-[-20px]  bg-gradient-to-r from-cyan-400 to-teal-400 drop-shadow-2xl  rounded-lg ${menu ? 'w-3/4 m-2 h-[600px] p-1 ':'w-0 h-[200px] p-0'} transform  duration-500 lg:hidden`}>

         
          <div className='w-full text-white bg-gray-900 p-4 rounded-lg'>
            
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
        </>
    )
}

export default Navbar