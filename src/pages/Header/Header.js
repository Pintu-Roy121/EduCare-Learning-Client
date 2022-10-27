import React from 'react';

const Header = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="px-14 md:px-20">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our New Programming Course</h1>
                    <p className="mb-5 px-10 md:px-24">A computer science degree is a common choice for aspiring high-level programmers. Computer science students who earn a Bachelor of Science degree learn the fundamentals of computer programming as well as the mathematical and scientific principles that provide the underpinnings.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Header;