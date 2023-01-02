import React ,{useState} from 'react'
import event from '../assets/event'
import {AiOutlineDoubleLeft ,AiOutlineDoubleRight } from "react-icons/ai";

const Events = () => {

  const [card,setCard] = useState(0)

  const slideLeft =() =>
  {
     var slider = document.getElementById('slider')
     slider.scrollLeft = slider.scrollLeft - 200
     if(card>0)
     setCard(card - 1)
     else
     setCard(7)

  } 

  const slideRight =()=>
  {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 200

    if(card<7)
     setCard(card + 1)
     else
     setCard(0)
  }

  const setter =(val) =>
  {
    setCard(val);
  }
  return (
   <>
       <div className=' p-4 flex flex-col justify-around '>
           <div className='flex flex-col mb-2'>
              <img className='h-[240px] w-full rounded-xl' src={event[card].images}></img>
            
           </div>
           <div className='h-44 pl-4 pr-4 rounded-lg bg-black bg-opacity-10 border-2 flex flex-col justify-around items-center text-justify'>
             <p className='text-gray-100 font-bold bg-black pr-1 pl-1 border-2 border-teal-300 rounded-lg'>{event[card].name}</p>
             <p className='text-white transition:transform duration-300'>{event[card].about}</p>
             
           </div>
          
       </div>
        
       <div className='h-10 w-screen flex justify-between items-center bg-black opacity-80'>
        <div className='ml-10 bg-teal-300 rounded-full p-1 hover:scale-110'>
          <AiOutlineDoubleLeft className='bg-black text-white p-1 rounded-full text-[25px]' onClick={slideLeft}/>
        </div>

       <div className='mr-10 bg-teal-300 rounded-full p-1 hover:scale-110' >
         <AiOutlineDoubleRight className='bg-black text-white p-1 text-[25px] rounded-full' onClick={slideRight}/>
       </div>
       </div>
       
      <div className='flex justify-center items-center h-60 '>
        
        
        
       <div id='slider' className='bg-white   overflow-x-scroll h-60 scroll-smooth whitespace-nowrap scrollbar-hide '>
           
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[0].images} onClick={() => setter(0)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[0].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[1].images} onClick={() => setter(1)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[1].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[2].images} onClick={() => setter(2)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[2].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[3].images} onClick={() => setter(3)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[3].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[4].images} onClick={() => setter(4)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[4].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[5].images} onClick={() => setter(5)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[5].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[6].images} onClick={() => setter(6)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[6].name}</p></div>
           <div className='w-50 h-40 inline-block text-center'><img className="w-50 h-40 m-2 inline-block cursor-pointer hover:scale-110 rounded-lg" src={event[7].images} onClick={() => setter(7)}></img><p className='bg-gray-900 text-white pt-1 pb-1 font-mono m-2 rounded-xl border-2'>{event[7].name}</p></div>
    
       </div>
       

       

       
       
     </div>
     
     
   </>
  )
}

export default Events