import React from 'react';
import AllCategory from '../AllCategory/AllCategory';
import AllCourses from '../AllCourses/AllCourses';
import Design from '../Design/Design';
import Header from '../Header/Header';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <AllCategory></AllCategory>
            <Design></Design>
            <AllCourses></AllCourses>
        </div>
    );
};

export default Home;