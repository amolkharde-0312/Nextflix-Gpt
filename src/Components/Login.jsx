import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
 const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative z-20">
      <Header/>
       <div className=" top-0 left-0 w-full h-full object-cover">
            <img src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" alt="Logo" />
        </div>
        <form className=" w-[500px] min-h-[400px] pt-10 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70  p-12 text-white ">
        <h1 className="font-bold text-white text-3xl py-4 ">{isSignInForm ? "Sign In":"Sign Up"}</h1>
              {!isSignInForm &&(<input type="text" placeholder="Full Name"className="p-4 m-2 w-full bg-gray-800 text-white border border-gray-500 rounded-md outline-none"/> )}
              <input type="text" placeholder="Email Address"className="p-4 m-2 w-full bg-gray-800 text-white border border-gray-500 rounded-md outline-none"/> 
              <input type="password" placeholder="Password" className="p-4 m-2 w-full bg-gray-800 text-white border border-gray-500 rounded-md outline-none"/>
             <button className="ml-35 px-12 py-2 bg-red-600 border border-white rounded-2xl text-white hover:scale-110 transition-300">{isSignInForm ? "Sign In":"Sign Up"}</button>
             <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now":"Already Registered? Sign In Now."}</p>
        </form>
    </div>
  )
};
export default Login;