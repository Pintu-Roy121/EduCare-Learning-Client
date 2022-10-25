import React from 'react';

const SingleCourse = ({ course }) => {
    const { title, image_url, } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <img className='h-56' src={image_url} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title text-left">{title}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;