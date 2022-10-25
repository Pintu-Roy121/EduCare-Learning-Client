import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    const { name, course_img } = category;
    return (
        <Link to='/course' className="card bg-base-100 shadow-xl image-full h-56 cursor-pointer">
            <figure><img src={course_img} alt="Shoes" /></figure>
            <div className="card-body px-12">
                <div className="card-actions justify-center items-center mt-24">
                    <h1 className='text-3xl font-medium'>{name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default SingleCategory;