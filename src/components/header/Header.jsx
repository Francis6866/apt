import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import MobileNav from './MobileNav'

const Header = () => {
    const [showMobile, setShowMobile] = useState(false)
  return (
    <>
        <header className='bg-[#E1D7CA] py-4 px-6 relative h-24'>
            <nav className='flex py-4 md:gap-46 items-center max-sm:justify-between'>
                <div className="brand">
                    <Link to='/'>
                        Brand Logo
                    </Link>
                </div>
                <div 
                    className="flex flex-col md:hidden cursor-pointer gap-1 toggler" 
                    role='button' 
                    tabIndex='0'
                    onClick={() => setShowMobile(!showMobile)}
                >
                    <div className='bg-[#3D081B] h-1 w-6'></div>
                    <div className='bg-[#3D081B] h-1 w-6'></div>
                    <div className='bg-[#3D081B] h-1 w-6'></div>
                </div>
                <ul className='md:flex text-[#3D081B] gap-14 hidden'>
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive ? `pb-2 border-b-3` 
                        : `hover:border-b pb-2`}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' className={({isActive}) => isActive ? `pb-2 border-b-3` 
                        : `hover:border-b pb-2`}>GALLERY</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({isActive}) => isActive ? `pb-2 border-b-3` 
                        : `hover:border-b pb-2`}>ABOUT US</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive}) => isActive ? `pb-2 border-b-3` 
                        : `hover:border-b pb-2`}>CONTACT US</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        {
            showMobile && <MobileNav setShowMobile={setShowMobile}/>
        }
    </>
  )
}

export default Header