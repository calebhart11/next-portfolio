import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "bg-gradient-to-br from-blue-500 via-emerald-500 to bg-pink-500 hover:bg-purple-400 text-black hover:text-white" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}
    >{name}</button>
    
  )
}

export default ProjectTag
