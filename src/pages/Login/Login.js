import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen py-10 bg-base-200">
                <div className="hero-content flex-col w-4/5 md:w-2/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="mt-5 flex flex-col text-left">
                                    <Link to="/register" className="label-text-alt text-sm font-medium link link-hover">Don not Have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control gap-4 mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button className="btn btn-outline"><FcGoogle className='text-3xl mr-4' />Login with Google</button>
                                <button className="btn btn-outline"><FaGithub className='text-3xl mr-4' />Login with Git Hub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;