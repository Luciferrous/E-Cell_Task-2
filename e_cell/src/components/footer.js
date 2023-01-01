import React from "react"; 

const Footer=()=>{
    return(
        <>
        <h1 className="flex justify-flex-start m-2 p-2 items-center font-bold text-black text-5xl">GET IN TOUCH</h1>
        <div className="flex flex-row justify-between p-2 ">
       <div> <h2 className="m-1 p-2 items-center font-bold text-black text-xl"><i class=" hover:scale-105 ease-in-out fa-solid fa-location-dot m-1"></i>E-Cell, MNNIT Allahabad, India</h2>
        <h2 className="m-1 p-2 items-center font-bold text-black text-xl"><i class=" hover:scale-105 ease-in-out fa-solid fa-phone m-1"></i>+91 7726924556, +91 9630929939</h2>
        <h2 className="m-1 p-2 items-center font-bold text-black text-xl"><i class=" hover:scale-105 ease-in-out fa-solid fa-envelope m-1 "></i>support@ecellmnnit.com</h2>
        </div>
          <div className="flex flex-col">
            <div >
          <i class=" hover:scale-105 ease-in fa-brands fa-facebook ml-24 mr-16 mb-2 fa-3x"></i>
          <i class=" hover:scale-105 ease-in fa-brands fa-instagram  ml-24 mr-16 mb-2 fa-3x"></i>
          <i class=" hover:scale-105 ease-in fa-brands fa-linkedin ml-24 mr-16 mb-2 fa-3x"></i>
          <i class=" hover:scale-105 ease-in fa-brands fa-twitter ml-24 mr-16 mb-2 fa-3x"></i>
          </div>
          <div className="mt-3">
             <p className="mt-3 mr-16 items-center font-bold text-black text-xl float-right">Copyright © E-Cell 2022. All rights reserved</p>
          </div>
          </div>
        </div>
        </>
    )
}

export default Footer;