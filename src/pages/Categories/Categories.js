import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://edu-care-learning-server.vercel.app/allcategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div>
            <div className='lg:sticky top-24'>
                <h1 className='text-2xl text-center font-bold text-blue-600'>All Course Category</h1>
                <hr className='border-2 border-blue-600 border-b-blue-600 mb-6' />
                {
                    categories.map(category =>
                        <p key={category.id} >
                            <Link to={`/category/${category.id}`} className='text-xl'><button className='btn btn-outline btn-success w-full lg:w-64 mb-6 shadow-lg shadow-success-500/50'>{category.name}</button></Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Categories; <h1>This is Categories side</h1>