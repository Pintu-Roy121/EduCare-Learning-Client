import React from 'react';
import AllCourses from '../AllCourses/AllCourses';
import Design from '../Design/Design';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllCourses></AllCourses>
            <Design></Design>
        </div>
    );
};

export default Home;