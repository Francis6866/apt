import React from 'react'

const OutlineBtn = ({text='learn more'}) => {
  return (
    <div className='border border-[#3D081B] rounded p-4 flex justify-center text-[#3D081B] hover:bg-[#3D081B] hover:text-white transition-all duration-300'>
      <button>{text}</button>
    </div>
  )
}

export default OutlineBtn
