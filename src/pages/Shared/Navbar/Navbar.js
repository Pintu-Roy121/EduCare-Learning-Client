import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png'


const Navbar = () => {
    return (
        <div className='w-full bg-gray-100 shadow-lg'>
            <nav className="relative w-5/6 mx-auto flex flex-wrap items-center justify-between py-3 focus:text-gray-700 ">
                <div className="container-fluid w-full flex items-center justify-between px-6">
                    <div className="container-fluid">
                        <Link to='/'> <img className='w-20' src={logo} alt="" /></Link>
                    </div>
                    <div className='flex gap-3 md:gap-7 text-base md:text-xl font-semibold'>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/'>Home</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/course'>Course</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/blog'>Blog</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/faq'>FAQ</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/login'>Log in</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/register'>Register</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;