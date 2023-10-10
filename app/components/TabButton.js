import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClasses = active ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab} className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to bg-pink-600 mr-3 hover:text-white'>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
      </p>
    
      </button>
  )
}

export default TabButton
