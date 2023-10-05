'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className='text-white' >
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/AboutSection.jpg"
        alt='about image'
        height={500}
        width={500}/>
        <div>
            <h2 className='text-4xl font-bold text-white mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3'>About Me</span></h2>
            <p className='text-base lg:text-lg'>With over 10 years of managing and laboring experience in the agricultural Science and Biotechnology sectors, I provide tenacious attention to detail, adaptability, and communication skills. I apply these skills toward my technical ability, resulting in clean, concise, and scalable code. From horticulture to software engineering, I bring a unique blend of technical expertise, analytical skills, and attention to detail to every project. With a background in bio-organic research and precision agriculture, I understand the importance of data-driven decision making and efficient workflow processes. My goal is to leverage my experience in the biotechnology industry to drive innovation and efficiency in the software development field.</p>
            <div className='flex flex-row mt-8'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3 hover:text-white'>Skills</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600  hover:text-white'>Education</span>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 ml-3 hover:text-white'>Experience</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
