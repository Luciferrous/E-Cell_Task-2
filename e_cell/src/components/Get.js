import React from "react"; 
import { SlLocationPin } from "react-icons/sl";
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import { AiFillInstagram,AiFillLinkedin,AiFillFacebook,AiFillTwitterCircle } from "react-icons/ai";
const Get=()=>{
  return(
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center">
        <p className=" text-pblue mt-[20px] mb-[50px] text-4xl font-black">Get In Touch</p>
        <div className="flex flex-col bg-sec mb-[50px] pl-[40px] pr-[40px] pt-[70px] pb-[70px] w-[700px]  rounded-tr-full rounded-bl-full">
          <div className="flex justify-center items-center  mb-[20px]">
            <div className="flex w-[306px] ">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px]"><SlLocationPin className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">E-Cell,MNNIT Allahabad,India</p>
            </div>
          </div>

          <div className="flex justify-center items-center  mb-[20px]">
            <div className="flex">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px]"><BsFillTelephoneFill className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">+91 7726924556, +91 9630929939</p>
            </div>
          </div>

          <div className="flex justify-center items-center mb-[20px]">
            <div className="flex w-[306px] ">
            <div className="flex justify-center items-center flex-[0.2] mr-[30px] "><MdEmail className="hover:scale-110" size="20px" color="hsl(179, 93%, 44%)"/></div>
            <p className="text-white">support@ecellmnnit.com</p>
            </div>
          </div>
        </div>
        <div className="flex mb-[50px]">
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  transition-all duration-1000 "><AiFillFacebook className="hover:scale-110" size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  transition-all duration-1000 "><AiFillInstagram className="hover:scale-110" size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  transition-all duration-1000 "><AiFillTwitterCircle className="hover:scale-110" size="50px" color="hsl(179, 93%, 44%)"/></div>
        <div className="cursor-pointer  mr-[30px] bg-sec p-[4px] hover:rounded-[5000px]  transition-all duration-1000 "><AiFillLinkedin className="hover:scale-110" size="50px" color="hsl(179, 93%, 44%)" /></div>
        
        </div>
      </div>
    </div>
  )
}

export default Get;