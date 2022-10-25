import React from 'react';


const SingleCourse = ({ course }) => {
    const { title, image_url } = course;
    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img className='h-56 w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;