import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'><img src={logo} alt="React Router" /></Link>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar