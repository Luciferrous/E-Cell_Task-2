import React,{useState} from "react";
import testimonial from '../assets/testimonial'
import {GrLinkPrevious,GrLinkNext} from "react-icons/gr"

const Testimonial =()=>{
    var x=0;
    var y=1;
    var len=testimonial.length;
    const [idx,nextIdx]=useState(x);
    const [idx1,nextIdx1]=useState(y);

    const next=()=>{
        console.log(len);
        x=(x+1)%len;
        y=(y+1)%len;
        nextIdx(x);
        nextIdx1(y);
    }
    const prev=()=>{
        if(x-1>=0)
        x=(x-1)
        else x=len-1;
        if(y-1>=0)
        y=(y-1)
        else y=len-1;
        nextIdx(x);
        nextIdx1(y);
    }
    return(
        <>
        <div className="p-[20px] bg-back flex justify-center items-center"><h1 className="text-pblue font-bold text-3xl ">Lines Of Appreciation</h1></div>
        <div className="bg-back pt-[50px] pb-[50px] w-full flex justify-center items-center">
            
            <div onClick={prev} className="cursor-pointer mr-[40px] h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkPrevious color="white"/>
            </div>
            

            <div className="rounded h-[580px] w-[382px] bg-sec mr-[40px] flex flex-col p-[7px]">
                <div className="h-[300px] w-[364px]">
                    <div className="h-[300px] w-[364px] absolute  bg-pblue opacity-40 z-5 hover:opacity-0 transition-all duration-1000"></div>
                    <img className="w-full h-full mb-[10px]" src={testimonial[idx].img}></img>
                </div>
                <div className="mb-[10px] flex flex-col justify-center items-center text-center relative ">
                    <p className="text-blue text-3xl font-bold">{testimonial[idx].name}</p>
                    <p className="text-white text-sm">{testimonial[idx].pos}</p>
                </div>
                <div className="flex flex-col text-center items-center m-[10px] bg-back p-[10px]">
                    <h1 className="text-pblue text-xl">{testimonial[idx].head}</h1>
                    <p className="text-white text-[13px]">
                    {testimonial[idx].data}
                    </p>
                </div>
            </div>

            <div className="rounded h-[580px] w-[382px] bg-sec flex flex-col p-[9px]">
                <div className="h-[300px] w-[364px]">
                    <div className="h-[300px] w-[364px] absolute bg-pblue opacity-40 z-5 hover:opacity-0 transition-all duration-1000"></div>
                    <img className="w-full h-full mb-[10px]" src={testimonial[idx1].img}></img>
                    
                </div>
                <div className="mb-[10px] flex flex-col justify-center items-center text-center relative ">
                    <p className="text-blue text-3xl font-bold">{testimonial[idx1].name}</p>
                    <p className="text-white text-sm">{testimonial[idx1].pos}</p>
                </div>
                <div className="flex flex-col text-center items-center m-[10px] bg-back p-[10px]">
                    <h1 className="text-pblue text-xl">{testimonial[idx1].head}</h1>
                    <p className="text-white text-[13px]">
                    {testimonial[idx1].data}
                    </p>
                </div>
            </div>  

            <div onClick={next}   className="cursor-pointer ml-[40px]  h-[30px] w-[30px] bg-blue flex justify-center items-center rounded-[5000px]">
            <GrLinkNext color="white" />
            </div>
        </div>
        </>
    )
}
export default Testimonial