import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from '../SingleCategory/SingleCategory'

const Category = () => {
    const allcategory = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-900 text-center mb-7'>All Category base Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    allcategory.map(category => <SingleCategory
                        key={category._id}
                        category={category}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;