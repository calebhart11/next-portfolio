import React from 'react'
import github from '../../public/github.svg'
import linkedin from "../../public/linkedin.svg"
import Link from 'next/link'
import Image from 'next/image'

function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 - translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold my-2'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600'>Want To Connect?</span></h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>{" "}I am currently seeking developer roles. If you would like to hire me, or just want to talk code, please feel free to drop me a message!</p>
        <div className='socials flex flex-row gap-2 '>
            <Link href='https://github.com/calebhart11' target='_blank'>
                <Image src={github} alt='Github Icon'/>
            </Link>
            <Link href='https://www.linkedin.com/in/caleb-hart-dev/' target='_blank'>
                <Image src={linkedin} alt='Linkedin Icon'/>
            </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
            <input type='email' id='email' required className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='email@example.com'/>
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' type='text' className='text-white block mb-2 text-sm font-medium'>Subject</label>
            <input type='text' id='subject' required className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Offer Letter'/>
          </div>
          <div className='mb-6 '>
            <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
              Message
            </label>
            <textarea name="message" id="messsage"  className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Hello Caleb, We would like to offer you a position...'/>
          </div>
          <button type='submit' className=' font-medium  py-2.5 px-5 rounded-lg w-full bg-gradient-to-br from-blue-500 via-emerald-500 to bg-pink-500 hover:bg-purple-400 text-black hover:text-white'>Send</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
