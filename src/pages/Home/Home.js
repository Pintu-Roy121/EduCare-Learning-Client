import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    const allCourses = useLoaderData();

    const courses = []
    if (allCourses.length > 6) {
        courses.push = allCourses.slice(0, 6);
    }

    return (
        <div>
            <h1 className='text-3xl text-info font-semibold mb-9'>All Category base Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    courses.push.map(course => <SingleCourse
                        key={course._id}
                        course={course}
                    />)
                }
            </div>
            <Link to='/courses'><button className="btn btn-success mt-12">View All Category <FaArrowRight className='text-lg ml-5' /></button></Link>
        </div>
    );
};

export default Home;