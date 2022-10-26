import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Header from '../pages/Header/Header';
import Categories from '../pages/Categories/Categories';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='flex gap-10 m-10'>
                <div className='grid col-span-4'>
                    <Categories></Categories>
                </div>
                <div className='grid col-span-8'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;