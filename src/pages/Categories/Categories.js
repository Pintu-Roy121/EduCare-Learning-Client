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
            <h1 className='text-2xl text-center font-bold text-blue-900'>All Course Category</h1>
            <hr className='border-2 border-blue-900 border-b-blue-900 mb-5 mt-2' />
            {
                categories.map(category =>
                    <p key={category.id} >
                        <Link to={`/category/${category.id}`} className='text-xl'><button className='btn btn-outline btn-success w-full md:w-64 mb-6'>{category.name}</button></Link>
                    </p>
                )
            }
        </div>
    );
};

export default Categories; <h1>This is Categories side</h1>