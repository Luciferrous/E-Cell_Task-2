import React from "react";


import data from "../assets/startup";
import { BiRepost } from "react-icons/bi";

const Startups=(props)=>{
  return(
    <>
    
    <div className="w-140 h-80 border flex rounded-2xl group bg-white m-4 p-2">
      <div className=" flex flex-row ">
    {/* <h1 className="text-white text-3xl font-bold">{props.title}</h1> */}
    <img className="w-60 h-full flex self-center" src={props.images} alt={props.title}/>
    </div>
    <div className=" h-full w-full bg-black flex items-center justify-center  opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300 text-cyan-400 font-xl font-bold">
    <p>{props.about}</p>
    </div>
    </div>
    </>
  )
}








































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

export default Startups;