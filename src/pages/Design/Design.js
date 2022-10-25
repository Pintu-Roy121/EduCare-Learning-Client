import React from 'react';

const Design = () => {
    return (
        <div className='w-5/6 mx-auto py-14 flex flex-col-reverse md:flex-row justify-between'>
            <div className='text-left flex flex-col gap-4 pr-8 mt-5'>
                <h1 className='text-3xl md:text-5xl font-semibold text-red-600'>WHY CHOOSE US_________</h1>
                <h1 className='text-3xl md:text-5xl font-bold'>Career Guideline
                    For Everyone</h1>
                <p className='text-lg text-justify'>This website is specifically designed for young and ambitions people looking to launch their careers in turbulent 2022 who wants to improve technology skills management, increase knowledge acquisition and retention, reduce liability through compliance training can learn from the Edu Buddies online training platform.</p>
            </div>
            <img className='w-full md:w-2/5 rounded-xl shadow-lg shadow-blue-500/50' src="https://imuscomputercollege.net.ph/wp-content/uploads/2014/09/programming.jpg" alt="" />
        </div>
    );
};

export default Design;