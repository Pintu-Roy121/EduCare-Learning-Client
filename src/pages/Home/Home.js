import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import SingleCategory from '../SingleCategory/SingleCategory';

const Home = () => {
    const allCategory = useLoaderData();

    const categories = []
    if (allCategory.length > 6) {
        categories.push = allCategory.slice(0, 6);
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-900 text-center mb-7'>Total Course of All category: {allCategory.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.push.map(category => <SingleCategory
                        key={category._id}
                        category={category}
                    />)
                }
            </div>
            <Link to='/courses'><button className="btn btn-success mt-12">View All Category <FaArrowRight className='text-lg ml-5' /></button></Link>
        </div>
    );
};

export default Home;