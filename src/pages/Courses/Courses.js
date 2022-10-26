import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Courses = () => {
    const allCategory = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-900 text-center mb-7'>All Category of Our Courses</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    allCategory.map(category => <CourseCategory
                        key={category.id}
                        category={category}
                    />)}
            </div>
        </div>
    );
};

export default Courses;