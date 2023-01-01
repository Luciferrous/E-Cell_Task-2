import React from "react";

const Form = ()=>{
    return(
        <div className="bg-gray-700 flex flex-row h-100 p-10 justify-around  ">
            <div>
            
            <h2 className=" hover:scale-105 font-bold flex m-3 p-2 justify-center items-center text-white text-3xl">FEEL FREE TO CONTACT IN CASE OF QUERIES</h2>
            <div className="  bg-gray-900 flex flex-col justify-center items-center font-bold mx-auto p-5  w-500 h-90 border rounded-xl">
              <div >
              <label className="text-white p-2 m-2"> NAME:  </label>
                <input type="text" className="border rounded p-2 m-2" placeholder="Enter your name here" /> 
                </div>
                <br />
                <div>
               <label className="text-white p-2 m-2"> EMAIL:  </label>
                <input type="email" className="border rounded p-2 m-2" placeholder="Enter your email here"/> 
                </div>
                <br />
                <div>
                <label className="text-white p-2 m-2"> MESSAGE:  </label>
                <input type="text"  className="border rounded p-2 m-2"  placeholder="Enter your comment here" />
                </div>
                <button type="submit" className="text-white p-3 m-4 border rounded-2xl hover:bg-white hover:text-black" >SUBMIT</button>
            </div>
            </div>
            <div className="p-8 m-7">
               <img className="hover:animate-bounce transition duration-700 delay-200 transition-shadow ease-in-out border rounded-full" src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=360&t=st=1672580651~exp=1672581251~hmac=3f25c9801dcdb0da17ecc451c1025f20ea083854f3ce7f85b9e907b678b15e95"></img>
            </div>
        </div>
    )
}
export default Form;