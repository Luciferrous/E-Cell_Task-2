import React from "react";


import data from "../assets/startup";
import { BiRepost } from "react-icons/bi";

const Startups=(props)=>{
  return(
    <>
    
<<<<<<< HEAD
    <div className=" h-80 border flex  rounded-2xl group bg-white m-4 p-2 mb-10 pb-16">
      <div className=" hover:scale-110 flex flex-row lg:block">
    {/* <h1 className="text-white text-3xl font-bold">{props.title}</h1> */}
    <div>
    <img className="w-80 md:visible h-80 flex self-center md:basis-1/4 p-2" src={props.images} alt={props.title}/>
    </div>
    <div className="md:basis-1/4 h-full w-full bg-black -z-index-1 hover:z-index-3 flex items-center justify-center  opacity-0 group-hover:opacity-100 overflow-hidden transition-all border rounded-3xl duration-300 text-cyan-400 font-xl font-bold">
    <p className="relative p-2 m-2 -z-index-1 hover:z-index-3 flex  w-full h-full ">{props.about}</p>
=======
    <div className="w-140 h-80 border flex rounded-2xl group bg-white m-4 p-2">
      <div className=" flex flex-row ">
    {/* <h1 className="text-white text-3xl font-bold">{props.title}</h1> */}
    <img className="w-60 h-full flex self-center" src={props.images} alt={props.title}/>
>>>>>>> 2d9def35de027a49e40d9ca764d4ddacd8a13c5f
    </div>
    <div className=" h-full w-full bg-black flex items-center justify-center  opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 text-cyan-400 font-xl font-bold">
    <p>{props.about}</p>
    </div>
    </div>
    </>
  )
}

export default Startups;






































// const Startups=()=>{
    
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//     return (
        
//         <div>
//             <h1 className="text-white font-bold text-3xl mx-auto flex align-self-center ">Various Startups byy MNNITians</h1>
//             <div>
//         <Slider {...settings}>
//             <div>
//                {data.map((item)=>(
//                 <div>
//                     <div>
//                     <div> <img src={item.images} alt={item.title}/> </div>
//                        <div> <h1 className="text-white">{item.about}</h1></div>
//                        </div>
//                 </div>
//                ))}
//             </div>
//             </Slider>
//             </div>
//             </div>
       
//     )
// }

