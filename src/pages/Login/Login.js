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
    const { user, providerLogin, handleSignInwithEmail, resetPasswore } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    // Sign is with Google Login..............................

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

    //Sign in with Git Hub System ............................ 


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

    //  Signin With Email and Password.............................

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

    const handleEmail = (event) => {
        const email = event.target.value;
        setUserEmail(email)

    }

    // send Reset password.................
    const handleResetPassword = () => {

        if (!userEmail) {
            toast.error('Please Provide a Email');
        }
        else {
            resetPasswore(userEmail)
                .then(result => {
                    toast.success('Varification Email Sent');
                    setError('');
                })
                .catch(error => {
                    setError(error.message);
                })
        }
    }


    return (
        <div>
            <div className="hero min-h-screen py-5 bg-base-200 rounded-2xl">
                <div className="hero-content flex-col w-4/5 md:w-3/5">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div onBlur={handleEmail} className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mb-3" />

                                <p className='text-red-700 font-semibold'>{error}</p>

                                <label className="my-5 flex justify-between items-center">
                                    <Link to="/register" className="label-text-alt text-blue-900 underline text-base font-medium link link-hover">Don not Have an Account? Register
                                    </Link>
                                    <div onClick={handleResetPassword} className="label-text-alt text-blue-900 underline text-base font-medium link link-hover">Forget Password</div>
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