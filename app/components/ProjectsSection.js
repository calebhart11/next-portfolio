import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Exoplanetarium",
        description: "Use exoplanetarium to find objects of interest for professional Astronomers to explore, and to classify already-identified candidates that have not yet been classified as either exoplanets or false-positives by the astronomical community.",
        image: '/images/projects/exoplanetarium.png',
        tag:["All", "Web"],
    },
    {
        id: 2,
        title: "GnarBazaar",
        description: "The next big E-commerce platform, designed for creators in the custom merchandising space.",
        image: "/images/projects/gnarbazaar.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "CETAMD",
        description: "A personal event tracker and calander designed for artists, making it easy to track birthdays, gigs, or anything in between.",
        image: "images/projects/CETAMD.png",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "What's For Dinner?",
        description: "A web app designed for users who want an easy way to choose what you want to eat for dinner.",
        image: "/images/projects/whatsfordinner.png",
        tag: ["All", "Web"]
    },
    {
        id: 5,
        title: "Pokedex",
        description: "A customized pokedex application leveraging data from the pokeapi.",
        image: "images/projects/pokedex.png",
        tag: ["All", "Web"]
    },
]

const ProjectsSection = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-white mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3'>My Projects</span></h2>
      <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}</div>
    </div>
  )
}

export default ProjectsSection
