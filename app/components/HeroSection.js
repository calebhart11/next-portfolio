'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import  {motion} from 'framer-motion';

    
  

export default function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}} className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600'>Hello, I&apos;m{" "}</span><br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Caleb Hart',
        2000, // wait 2s before replacing to "A Full Stack Developer"
        'A Full Stack Developer',
        2000,
        'A Horticulturist',
        2000,
        'A Gamer',
        2000,
        'A Snowboarder',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /></h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg  lg:text-xl mb-6 mr-4'>
            I am an efficient and detail driven software engineer with a passion for solving complex problems, and providing valuable solutions. 
            </p>
            <div>
              <Link href="https://docs.google.com/document/d/1GNTKzgOlSrIDT8dAYPixs1uxXDMuS-UxGbUC2yzY_cs/edit?usp=sharing" target='_blank'>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-emerald-500 to bg-pink-500 hover:bg-purple-400 text-black hover:text-white'>Hire Me</button>
              </Link>
              <Link href="https://docs.google.com/document/d/1GNTKzgOlSrIDT8dAYPixs1uxXDMuS-UxGbUC2yzY_cs/edit?usp=sharing" target='_blank'>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-emerald-500 to-pink-500 hover:bg-slate-800 text-white  mt-3 '><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Resume</span></button>
              </Link>
            </div>
        </motion.div>
        <motion.div className='col-span-5 place-self-center mt-4 lg:mt-0' initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} >
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                    src='/images/heropic.jpeg'
                    alt='Hero Image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                    width={140}
                    height={140}
                />
            </div>        
            
        </motion.div>
      </div>
    </section>
  )
}
