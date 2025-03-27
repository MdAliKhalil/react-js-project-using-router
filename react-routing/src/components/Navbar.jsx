import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='container w-full flex flex-row justify-between items-center px-[8%] py-[15px]'>
            <span><Link to='/'><img className='w-[131.825px] h-auto' src={logo} alt="React Router Logo" /></Link></span>
            <ul className='hidden md:flex flex-row py-[10px] px-[30px] rounded-[30px] shadow-[0_0_30px_0_rgba(0,0,0,0.1)]'>
                <li className='mx-[10px] px-[10px] text-black'><NavLink to='/'>Home</NavLink></li>
                <li className='mx-[10px] px-[10px] text-black'><NavLink to='/about'>About</NavLink></li>
                <li className='mx-[10px] px-[10px] text-black'><NavLink to='/products'>Products</NavLink></li>
                <li className='mx-[10px] px-[10px] text-black'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <button className='bg-black text-white py-[8px] px-[25px] border-0 outline-0 rounded-[30px] text-[16px] cursor-pointer'>Get Started</button>
        </div>
    )
}

export default Navbar