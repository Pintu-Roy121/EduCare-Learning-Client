import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategory/CourseCategory';

const Courses = () => {
    const allCategory = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                allCategory.map(category => <CourseCategory
                    key={category.id}
                    category={category}
                />)}
        </div>
    );
};

export default Courses;