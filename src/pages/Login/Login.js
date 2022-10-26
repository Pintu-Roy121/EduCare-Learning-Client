import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const { providerLogin, handleSignInwithEmail } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [error, seterror] = useState('');
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Log in')
                navigate('/')
            })
            .catch(error => {
                seterror(error.message);
            })
    }

    const handleGitHubLogIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                toast.success('Successfully Log in')
                navigate('/')
            })
            .catch(error => {
                seterror(error.message);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleSignInwithEmail(email, password)
            .then(result => {
                toast.success('Successfully Log in')
                navigate('/');
                form.reset()
            })
            .catch(error => {
                seterror(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen py-10 bg-base-200">
                <div className="hero-content flex-col w-4/5 md:w-2/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered mb-3" />
                                <p className='text-red-700 font-semibold'>{error}</p>
                                <label className="mt-5 flex flex-col text-left">
                                    <Link to="/register" className="label-text-alt text-sm font-medium link link-hover">Don not Have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control gap-4 mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleLogin} className="btn btn-outline"><FcGoogle className='text-3xl mr-4' />Login with Google</button>
                                <button onClick={handleGitHubLogIn} className="btn btn-outline"><FaGithub className='text-3xl mr-4' />Login with Git Hub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;