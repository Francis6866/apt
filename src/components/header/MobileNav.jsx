import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import DropNav from './DropNav'


const MobileNav = ({setShowMobile}) => {
    const [showdrop, setShowDrop] = useState(false)

  return (
    <div className='absolute top-0  w-screen h-screen z-50 bg-[#0000007c]'>
      <nav className='w-2/3 absolute right-0 h-screen bg-white'>
            <header className='px-6 bg-[#E1D7CA] flex justify-between items-center py-10'>
                <div className='brand'>
                    <Link>brand logo</Link>
                </div>

                <button onClick={() => setShowMobile(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 24 24" style={{fill: "#3D081B"}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </button>
            </header>

            

            <ul className=' bg-white'>
                <li className='py-5 px-6 border-b-[0.5px] border-b-[#ccc]'>
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>HOME</NavLink>
                </li>
                <li 
                    className='py-5 px-6 border-b-[0.5px] border-b-[#ccc] flex justify-between items-center relative'
                    onClick={()=>setShowDrop(!showdrop)}
                >
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>ABOUT US</NavLink>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24" style={{fill: "#3D081B"}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
                </li>
                    {
                        showdrop && <DropNav />
                    }
                <li className='py-5 px-6 border-b-[0.5px] border-b-[#ccc]'>
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>CONTACTS</NavLink>
                </li>
                <li className='py-5 px-6 border-b-[0.5px] border-b-[#ccc]'>
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>GALLERY</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MobileNav
