import React from 'react'

const BlockBtn = ({text='more'}) => {
  return (
    <div className='border border-[#3D081B] rounded py-2 flex justify-center text-white bg-[#3D081B] hover:bg-white hover:text-[#3D081B] transition-all duration-300'>
    <button>{text}</button>
  </div>
  )
}

export default BlockBtn