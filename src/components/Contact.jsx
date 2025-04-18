import React from 'react'

const Contact = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light '>With Us</span></h1>
         <p className='text-gray-500 max-w-80 text-center mb-8'>Ready to Make a Move? Let's Build Your Future Together</p>
         <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
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
            <button className='bg-blue-600 text-white rounded py-2 px-12 mb-12'>Send Message</button>
         </form>
    </div>
  )
}

export default Contact