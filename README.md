Build And Deploy Real Estate Website Using React and Tailwind CSS | React JS Project

1-> folder structure 
    1->components
        1->Navbar.jsx
2-> add favicon
3-> tailwind setup in react
4->navbar create
---------------------------------------------------
<!-- import React from 'react'
import {assets} from '../assets /assets'
const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sing up</button>
        </div>
    </div>
  )
}

export default Navbar

------------------------------
5-> Create header
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8 py-3'>Projects</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header
---------------------------
6-> navbar responsive and mobile menu
import React, { useEffect, useState } from 'react'
import {assets} from '../assets /assets'
const Navbar = () => {
  const [showMobileMenu,setShowMobileMenu] = useState(false)
  //scroll
  useEffect(()=>{
   if(showMobileMenu){
    document.body.style.overflow = 'hidden'
   }else{
      document.body.style.overflow = 'auto'
   }
   return ()=>{
     document.body.style.overflow = 'auto'
   }
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sing up</button>
            <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* mobile menu */}
        <div className={`md:hidden ${showMobileMenu? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar -->
---------------------------------------------------
7-> contact section create

-> send message email -> https://web3forms.com
->step1- send message
-------------------------
<!-- import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "36980391-2425-4f13-b222-36c544d79fb1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        alert('Form Submitted Successfully')
        event.target.reset();
      } else {
        console.log("Error", data);
        alert(data.message)
        setResult("");
      }
    };
  return (
    <div className='text-center flex flex-col justify-center items-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light '>With Us</span></h1>
         <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let's Build Your Future Together</p>
         <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap' >
                <div className='w-full  md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="Name" placeholder='Your Name' required />
                </div>
                <div className='w-full  md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="Email" placeholder='Your Email' required />
                </div>
            </div>
            {/*  */}
            <div className='text-left my-6'>
                Message
              <textarea name="Message" id="" placeholder='Message' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'></textarea>
            </div>
            <button className='bg-blue-600 text-white rounded py-2 px-12 mb-12'>{result? result:"Send Message"}</button>
         </form>
    </div>
  )
}

export default Contact -->

->step-2
npm i react-toastify

---------------------

<!-- import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App

----------
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "36980391-2425-4f13-b222-36c544d79fb1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success('Form Submitted Successfully')
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };
  return (
    <div className='text-center flex flex-col justify-center items-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light '>With Us</span></h1>
         <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let's Build Your Future Together</p>
         <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap' >
                <div className='w-full  md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="Name" placeholder='Your Name' required />
                </div>
                <div className='w-full  md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="Email" placeholder='Your Email' required />
                </div>
            </div>
            {/*  */}
            <div className='text-left my-6'>
                Message
              <textarea name="Message" id="" placeholder='Message' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'></textarea>
            </div>
            <button className='bg-blue-600 text-white rounded py-2 px-12 mb-12'>{result? result:"Send Message"}</button>
         </form>
    </div>
  )
}

export default Contact -->