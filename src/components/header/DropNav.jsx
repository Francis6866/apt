import { Link, NavLink } from 'react-router'

const DropNav = () =>{
    return (
        <ul className=''>
            <li className='py-5 px-12 border-b-[0.5px] border-b-[#ccc]'>
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>Overview</NavLink>
            </li> 
            <li className='py-5 px-12 border-b-[0.5px] border-b-[#ccc]'>
                    <NavLink className={(isActive) => isActive ? 'text-[#3D081B] text-2xl opacity-100' : 'text-white opacity-50 block py-4'}>Mission</NavLink>
            </li> 
        </ul>
    )
}

export default DropNav