import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegClock, FaUsers, FaShareAlt, FaRegHeart } from "react-icons/fa";

const Course = () => {
    const course = useLoaderData();
    const { title, image_url, details, duration, total_student, teacher, price } = course;

    return (
        <div className="card w-3/5 mx-auto bg-base-100 shadow-xl">
            <div className='h-16 bg-slate-100 flex items-center justify-between px-6'>
                <div className='flex item-center'>
                    <img className='h-11 w-11 rounded-full mr-3' src={teacher.img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{teacher.name}</h4>
                        <p>{teacher.published_date}</p>
                    </div>
                </div>
                <div className='text-2xl flex items-center gap-3'>
                    <FaRegHeart />
                    <FaShareAlt />
                </div>
            </div>
            <figure><img className='p-4 rounded-3xl' src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-justify'>{details.length > 200 ? details.slice(0, 200) + '.....' : details}</p>
            </div>
            <h2 className='text-2xl m-8 font-semibold'>Price: {price} $</h2>
            <div className='h-16 bg-slate-100 flex justify-between items-center px-9'>
                <p className='text-xl flex items-center gap-3 font-semibold'><FaRegClock />{duration} Hrs</p>
                <p className='text-xl flex items-center gap-3 font-semibold'>Users: <FaUsers className='text-2xl' />{total_student} </p>

            </div>
        </div>
    );
};

export default Course;