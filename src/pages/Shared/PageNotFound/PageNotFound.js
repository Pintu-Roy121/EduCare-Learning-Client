import React from 'react';
import img from '../../../assets/brands/404 page.png'

const PageNotFound = () => {
    return (
        <div>
            <div className='w-96 h-96 mx-auto my-10'>
                <img src={img} alt="" />
                <h1 className='text-4xl font-bold text-cyan-500'>PAGE NOT FOUND !!!!</h1>
            </div>
        </div>
    );
};

export default PageNotFound;