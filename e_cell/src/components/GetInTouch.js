import React from "react";


const Form = ()=>{
    return(
     
        <div className="bg-gray-700 mt-10 pt-14  justify-around  ">

        <div className="bg-sec justify-around  ">

              
            <div className="flex justify-start">
                 <h2 className="font-bold flex m-3 p-2 md:justify-center items-center text-white text-2xl">FEEL FREE TO CONTACT IN CASE OF QUERIES</h2>
            </div>
            
            <div className="w-full lg:flex p-4">
            
              <div> 
                <div className="  bg-back flex flex-col justify-center items-center md:justify-center items-center font-bold mx-auto p-5 h-90 border rounded-xl md:flex flex-col justify-center items-center ">
              <div className="w-full">
              <label className="text-white p-2 m-2"> NAME:  </label>
                <input type="text" className="border rounded p-2 m-2 w-full" placeholder="Enter your name here" /> 
                </div>
                <br />
                <div className="w-full">
               <label className="text-white p-2 m-2"> EMAIL:  </label>
                <input type="email" className="border rounded p-2 m-2 w-full " placeholder="Enter your email here"/> 
                </div>
                <br />
                <div className="w-full">
                <label className="text-white p-2 m-2"> MESSAGE:  </label>
                <br/>
                {/* <input type="text"  className="border rounded p-2 m-2 w-full"  placeholder="Enter your comment here" /> */}
                <textarea className="border rounded p-2 m-2 w-full " placeholder="Enter your comment here" rows="4" cols="70">
    </textarea>
                </div>
                <button type="submit" className="text-white pr-3 pl-3 pt-2 pb-2 m-4  rounded-xl bg-blue hover:bg-lblue" >SUBMIT</button>
                </div>

              </div>

              <div className=" p-8 m-7 w-0 md:w-1/4 hidden lg:w-1/2 lg:flex lg:justify-center">
                <img className="animate-bounce duration-700 delay-200 transition-shadow ease-in-out border rounded-full " src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=360&t=st=1672580651~exp=1672581251~hmac=3f25c9801dcdb0da17ecc451c1025f20ea083854f3ce7f85b9e907b678b15e95"></img>
              </div>

            </div>
           
        </div>
        </div>
    )
}
export default Form;