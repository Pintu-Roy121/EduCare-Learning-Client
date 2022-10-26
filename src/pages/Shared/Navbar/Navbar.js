import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useState } from 'react';


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

    const handleSignOut = () => {
        LogOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleToggle = () => {
        setToggle(!toggle)
    }
    // console.log(user);
    return (
        <div className='w-full bg-gray-100 shadow-lg sticky top-0 z-50'>
            <nav className="relative w-11/12 md:w-5/6 mx-auto flex flex-wrap items-center justify-between py-3 focus:text-gray-700 ">
                <div className="container-fluid w-full flex items-center justify-between px-6">
                    <div className="container-fluid">
                        <Link to='/'> <img className='w-14 md:w-20' src={logo} alt="" /></Link>
                    </div>
                    <div className='flex gap-3 md:gap-4 lg:gap-7 items-center text-sm md:text-base lg:text-xl font-semibold'>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/'>Home</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/courses'>Courses</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/blog'>Blog</Link>
                        <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/faq'>FAQ</Link>
                        {
                            user?.uid ?
                                < div className='flex gap-3'>
                                    <span>{user?.displayName}</span>
                                    <Link to='/login' onClick={handleSignOut} className='hover:text-red-500 hover:underline focus:underline duration-300 '>Log Out</Link>
                                </div>
                                :
                                <div className='flex gap-3'>
                                    <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/login'>Log in</Link>
                                    <Link className='hover:text-red-500 hover:underline focus:underline duration-300 ' to='/register'>Sign Up</Link>
                                </div>

                        }
                        {
                            user?.photoURL ?
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img src={user?.photoURL} alt="" className='h-5 w-5 md:h-9 md:w-9 rounded-full' />
                                </div>
                                :
                                <></>

                        }
                        <div onChange={handleToggle} className='flex items-center'>
                            {
                                toggle ?
                                    <input type="checkbox" className="toggle" />
                                    :
                                    <input type="checkbox" className="toggle" checked />
                            }
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;