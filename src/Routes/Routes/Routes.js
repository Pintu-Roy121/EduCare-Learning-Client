import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PageNotFound from "../../pages/Shared/PageNotFound/PageNotFound";
import Course from '../../pages/Course/Course'
import Courses from "../../pages/Courses/Courses";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://edu-care-learning-server.vercel.app/allcourses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://edu-care-learning-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/coursedetails/:id',
                element: <PrivateRoutes><Course></Course></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://edu-care-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://edu-care-learning-server.vercel.app/allcategory')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
])