'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React.JS</li>
        <li>Next.JS</li>
        <li>CSS3</li>
        <li>Python</li>
        <li>Java</li>
        <li>SQL</li>
        <li>AWS</li>
        <li>HTML5</li>
        <li>Tailwind</li>
        <li>Node.JS</li>
        <li>MongoDB</li>
        <li>Django</li>
        <li>GraphQL</li>
        <li>Bootstrap</li>
        <li>PostgreSQL</li>

      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>General Assembly</li>
        <li>University Of California, Riverside</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>General Assembly Software Engineeing Immersive</li>
      </ul>
    )
    }
  
]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

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
        width={500}
        className='rounded-2xl'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3'>About Me</span></h2>
            <p className='text-base lg:text-lg'>With over 10 years of management and labor experience in the agricultural Science and Biotechnology sectors, I provide tenacious attention to detail, adaptability, and communication skills. I apply these skills toward my technical ability, resulting in clean, concise, and scalable code. From horticulture to software engineering, I bring a unique blend of technical expertise, analytical skills, and attention to detail to every project. With a background in bio-organic research and precision agriculture, I understand the importance of data-driven decision making and efficient workflow processes. My goal is to leverage my experience in the biotechnology industry to drive innovation and efficiency in the software development field.</p>
            <div className='flex flex-row justify-start mt-8'>
              <TabButton selectTab={() =>  handleTabChange("skills")} active={tab === "skills"} >Skills{''}</TabButton>
              <TabButton selectTab={() =>  handleTabChange("education")} active={tab === "education"}>Education{''}</TabButton>
              <TabButton selectTab={() =>  handleTabChange("certifications")} active={tab === "certifications"}>Certifications{''}</TabButton>
            </div>
            <div  className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
