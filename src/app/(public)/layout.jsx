import React from 'react'
import '../globals.css'
function layout({ children }) {
  return (
    <>
      <img src='edulogo.svg' alt='logo' className='w-28 h-28 mt-3 ml-10' />
      <div className='bg-[#ffffff]'>{children}</div>
    </>
  )
}

export default layout
