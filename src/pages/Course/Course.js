import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Course = () => {
    const allcourse = useLoaderData()
    return (
        <div className='py-20 w-5/6 mx-auto'>
            <h1 className='text-5xl text-sky-500 text-shadow-lg font-semibold mb-8'>All Popular Courses</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 '>
                {
                    allcourse.map(course =>
                        <SingleCourse
                            key={course._id}
                            course={course} />
                    )
                }
            </div>
        </div>
    );
};

export default Course;