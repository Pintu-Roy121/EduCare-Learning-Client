import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';

const AllCategory = () => {
    const [allcategory, setAllCategory] = useState([])

    useEffect(() => {
        fetch('https://edu-care-learning-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setAllCategory(data))
    })

    return (
        <div className='py-16 w-4/6 mx-auto z-0'>
            <h1 className='text-3xl md:text-5xl mb-10 font-semibold text-red-500'>Our Course Categories</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    allcategory.map(category => <SingleCategory
                        key={category.id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default AllCategory;