import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-full mx-auto my-20 flex flex-col gap-10'>
                <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                    <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>what is cors?</h1>
                    <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.CORS is a mechanism implemented by browsers to block requests from domains other than the server's one. When a browser makes a request, it adds an origin header to the request message. If it goes to the server of the exact origin, it is allowed by the browser, and if it does not, the browser blocks it. </p>
                </div>
                <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                    <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 p-3'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.<br />
                        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                    <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>How does the private route work?</h1>
                    <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                    <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>What is Node? How does Node work?</h1>
                    <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;