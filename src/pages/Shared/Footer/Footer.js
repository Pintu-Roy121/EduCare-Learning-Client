import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brands/logo.png'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-red-50 text-black">
                <div>
                    <img className='h-20' src={logo} alt="" />
                    <p className='text-lg font-semibold'>Education is the Backbone of the Nation</p>
                </div>
                <div>
                    <span className=" text-xl font-bold text-black">Social</span>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <Link to='' className='hover:text-blue-800 duration-500'><FaFacebook /></Link>
                        <Link to='' className='hover:text-red-700 duration-500'><FaYoutube /> </Link>
                        <Link to='' className='hover:text-sky-600 duration-500'><FaTwitter /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;