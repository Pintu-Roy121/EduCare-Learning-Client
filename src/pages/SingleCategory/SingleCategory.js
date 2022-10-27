import React from 'react';
import { Link } from 'react-router-dom';
import { ImPriceTag } from "react-icons/im";

const SingleCategory = ({ category }) => {
    const { title, image_url, _id } = category;

    return (
        <div className="card card-compact w-4/5 mx-auto md:w-full h-96 bg-base-100 shadow-lg shadow-blue-500/50 relative">
            <figure><img className='h-48 w-full' src={image_url} alt="" /></figure>
            <div className="card-body items-center">
                <h2 className="card-title">{title}</h2>
                <Link to={`/coursedetails/${_id}`} className=' absolute bottom-2 flex gap-2'>
                    <button className='btn btn-outline btn-warning'>
                        Get Premium Details <ImPriceTag className='text-2xl ml-2' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleCategory;