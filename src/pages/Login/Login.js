import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                toast.success('Successfully Log in')
                navigate(from, { replace: true });
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGitHubLogIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                setError('');
                toast.success('Successfully Log in')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
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
                navigate(from, { replace: true });
                form.reset()
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen py-10 bg-base-200">
                <div className="hero-content flex-col w-4/5 md:w-2/4">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
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
                                    <Link to="/register" className="label-text-alt text-blue-900 underline text-base font-medium link link-hover">Don not Have an Account? <span className='text-sm'>Register Here</span></Link>
                                </label>
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                        <div className="form-control px-8 gap-3 mb-5">
                            <button onClick={handleGoogleLogin} className="btn btn-outline"><FcGoogle className='text-3xl mr-4' />Login with Google</button>
                            <button onClick={handleGitHubLogIn} className="btn btn-outline"><FaGithub className='text-3xl mr-4' />Login with Git Hub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;