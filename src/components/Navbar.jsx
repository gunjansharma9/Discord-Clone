import React from 'react'
import img from "../images/logo.svg";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='bg-[#404EED] font-ggSans'>
        <nav className='text-[#fff] max-w-[1200px] flex items-center mx-auto justify-between h-[72px] xl:px-0 px-7'>
            <img src={img} alt="" className="cursor-pointer" />

            <div className='xl:flex font-[600] gap-10 font-ggSans hidden'>
                <NavLink to="/" className="hover:underline">Download</NavLink>
                <NavLink to="/" className="hover:underline">Nitro</NavLink>
                <NavLink to="/" className="hover:underline">Discover</NavLink>
                <NavLink to="/" className="hover:underline">Safety</NavLink>
                <NavLink to="/" className="hover:underline">Support</NavLink>
                <NavLink to="/" className="hover:underline">Blog</NavLink>
                <NavLink to="/" className="hover:underline">Careers</NavLink>
            </div>

            <button className='bg-[#fff] text-[#2c2f33] text-[14px] rounded-full px-4 p-2'>Login</button>
        </nav>
    </div>
  )
}
