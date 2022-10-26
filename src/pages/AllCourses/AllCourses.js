import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import { FaArrowRight } from "react-icons/fa";

const AllCourses = () => {
    const allcourse = useLoaderData();
    const courses = [];
    if (allcourse.length > 6) {
        courses.push = allcourse.slice(0, 6);
    }

    return (
        <div className='py-20 w-5/6 mx-auto text-center'>
            <h1 className='text-5xl text-sky-500 text-shadow-lg font-semibold mb-8'>All Popular Courses</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
                {
                    courses.push.map(course => <SingleCourse
                        key={course._id}
                        course={course}
                    />)
                }
            </div>
            <button className="btn btn-accent mt-14"><Link className='flex gap-2 text-lg items-center' to='/course'>view all <FaArrowRight /></Link></button>
        </div>
    );
};

export default AllCourses;