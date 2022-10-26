import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const SingleCourse = ({ course }) => {
    const { title, image_url } = course;
    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl relative">
            <figure><img className='h-48 w-full' src={image_url} alt="" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <button className="btn btn-primary absolute bottom-2 ">View Course Details <FaArrowRight className='text-lg ml-5' /> </button>
            </div>
        </div>
    );
};

export default SingleCourse;