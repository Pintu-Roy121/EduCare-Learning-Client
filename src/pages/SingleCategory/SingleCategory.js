import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    const { title, image_url, _id } = category;

    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl relative">
            <figure><img className='h-48 w-full' src={image_url} alt="" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <Link to={`/coursedetails/${_id}`} className=' absolute bottom-2 '><button className="btn btn-primary">
                    View Course Details <FaArrowRight className='text-lg ml-5' /> </button></Link>
            </div>
        </div>
    );
};

export default SingleCategory;