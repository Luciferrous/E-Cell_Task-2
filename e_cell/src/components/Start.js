import React, { useState } from 'react'
import data from '../assets/startup'                     

const Start = () => {

    const [val1,setval1] = useState(false)
    const [val2,setval2] = useState(false)
    const [val3,setval3] = useState(false)
    const [val4,setval4] = useState(false)
    const [val5,setval5] = useState(false)

   
  return (
    <>

        <div className='h-40 w-screen flex justify-center items-center'>
           <p className='text-blue text-[40px]'>Startups</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-around items-center bg-back '>
        
                 <div className='Card bg-white w-[250px]' onMouseEnter={()=>setval1(!val1)} onMouseLeave={()=>setval1(!val1)}>
                     <div className='w-[250px] h-[250px]'>
                     <div className='info flex flex-col justify-around' >
                        <div className={`w-[250px] hover:hidden ${val1?'hidden':''}` }>
                           <img className='w-[250px]'  src={data[0].images}></img>
                        </div>
                        
                        <div className={`${!val1?'hidden':''} bg-sec h-[250px] p-2 text-justify text-white `}>
                          <p >{data[0].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>



                  <div className='Card bg-white w-[250px]'  onMouseEnter={()=>setval2(!val2)} onMouseLeave={()=>setval2(!val2)}>
                     <div className='w-[250px] h-[250px]'>
                     <div className='info flex flex-col justify-around'>
                        <div className={`w-[250px] hover:hidden ${val2?'hidden':''}` }>
                           <img className='w-[250px]' src={data[1].images}></img>
                        </div>
                        
                        <div className={`${!val2?'hidden':''} bg-sec h-[250px] p-2 text-justify text-white `}>
                          <p >{data[1].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>



                  <div className='Card bg-white w-[250px]'  onMouseEnter={()=>setval3(!val3)} onMouseLeave={()=>setval3(!val3)}>
                     <div className='w-[250px] h-[250px]'>
                     <div className='info flex flex-col justify-around'>
                        <div className={`w-[250px] hover:hidden ${val3?'hidden':''}` }>
                           <img className='w-[250px]' src={data[2].images}></img>
                        </div>
                        
                        <div className={`${!val3?'hidden':''} bg-sec h-[250px] p-2 text-justify text-white `}>
                          <p >{data[2].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>



                  <div className='Card bg-white w-[250px] transform duration-300'  onMouseEnter={()=>setval4(!val4)} onMouseLeave={()=>setval4(!val4)}>
                     <div className='w-[250px] h-[250px]'>
                     <div className='info flex flex-col justify-around'>
                        <div className={`w-[250px] ${val4?'hidden':''}` }>
                           <img className='w-[250px]' src={data[3].images}></img>
                        </div>
                        
                        <div className={`${!val4?'hidden':''} bg-sec h-[250px] p-2 text-justify text-white `}>
                          <p >{data[3].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>


                  

                  <div className='Card bg-white w-[250px]' onMouseEnter={()=>setval5(!val5)} onMouseLeave={()=>setval5(!val5)}>
                     <div className='w-[250px] h-[250px]'>
                     <div className='info flex flex-col justify-around' >
                        <div className={`w-[250px] hover:hidden ${val5?'hidden':''} flex  items-center` }>
                           <img className='w-[250px] ' src={data[4].images}></img>
                        </div>
                        
                        <div className={`${!val5?'hidden':''} bg-sec h-[250px]  p-2 text-justify text-white `}>
                          <p >{data[4].about}</p>
                        </div>
                       
                     </div>
                     </div>
                  </div>

                 

                 

                

                  
          
        </div>
    </>
  )
}

export default Start