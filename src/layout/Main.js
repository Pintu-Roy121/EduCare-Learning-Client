import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Header from '../pages/Header/Header';
import Categories from '../pages/Categories/Categories';
import Design from '../pages/Design/Design'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='flex flex-col lg:flex-row gap-5 mx-10 my-5'>
                <div className='grid col-span-4'>
                    <Categories></Categories>
                </div>
                <div className='grid col-span-8 w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Design></Design>
            <Footer></Footer>
        </div>
    );
};

export default Main;