import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  default: {width:0},
  active: {width: 'calc(100% - 0.75rem)'},

}
const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab} className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3 hover:text-white'>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
      </p>
        <motion.div animate={active ? "active" : "default"} variants={variants} className='h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mt-2 mr-3'></motion.div>
      </button>
  )
}

export default TabButton
