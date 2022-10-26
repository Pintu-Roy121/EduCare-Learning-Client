import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({ category }) => {
    const { id, name, course_img } = category;
    return (
        <div>
            <Link to={`/category/${id}`}>
                <div className="card h-52 bg-base-100 shadow-xl image-full">
                    <figure><img className='h-full' src={course_img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <p className='text-3xl font-semibold'>{name}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CourseCategory;