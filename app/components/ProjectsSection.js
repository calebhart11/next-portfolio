'use client'
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Exoplanetarium",
        description: "Use exoplanetarium to find objects of interest for professional Astronomers to explore, and to classify already-identified candidates that have not yet been classified as either exoplanets or false-positives by the astronomical community.",
        image: '/images/projects/exoplanetarium.png',
        tag:["All", "Web", "Mobile"],
        gitUrl: "https://github.com/spacelabdev/spacelab-react",
        previewUrl: "https://spacelabdev.github.io/Exoplanetarium-3D/",
    },
    {
        id: 2,
        title: "GnarBazaar",
        description: "The next big E-commerce platform, designed for creators in the custom merchandising space.",
        image: "/images/projects/gnarbazaar.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/calebhart11/Gnarbazaar-frontend.git",
        previewUrl: "https://gnarbazaar.netlify.app/",
    },
    {
        id: 3,
        title: "CETAMD",
        description: "A personal event tracker and calander designed for artists, making it easy to track birthdays, gigs, or anything in between.",
        image: "images/projects/CETAMD.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/rawlenightlong/cetamdfrontend",
        previewUrl: "https://cetamdreact.onrender.com/",
    },
    {
        id: 4,
        title: "What's For Dinner?",
        description: "A web app designed for users who want an easy way to choose what you want to eat for dinner.",
        image: "/images/projects/whatsfordinner.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/calebhart11/Unit-2-project",
        previewUrl: "https://whats-for-dinner-t3y0.onrender.com/",
    },
    {
        id: 5,
        title: "Pokedex",
        description: "A customized pokedex application leveraging data from the pokeapi.",
        image: "images/projects/pokedex.png",
        tag: ["All",],
        gitUrl: "https://github.com/calebhart11/Pokedex-App",
        previewUrl: "https://pokedex-yoqt.onrender.com/pokemon",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All')
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    const filteredProjects =projectsData.filter((project) => 
        project.tag.includes(tag)
    )
  return (
    <div>
      <h2 className='text-4xl font-bold text-white mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3'>My Projects</span></h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === "Mobile"} />



      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>
    </div>
  )
}

export default ProjectsSection
