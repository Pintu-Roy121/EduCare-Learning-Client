import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUserWithEamil, handleUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPassworError] = useState('')
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photourl = form.photourl.value;

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Please Enter valid Email..');
            return;
        } else {
            setEmailError('')
        }
        if (password.length < 6) {
            setPassworError("Please Enter at least 6 characters ");
            return;
        } else {
            setPassworError('')
        }

        createUserWithEamil(email, password)
            .then(result => {
                form.reset();
                UserUpdateProfile(name, photourl);
                toast.success('Successfully Log in')
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const UserUpdateProfile = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        handleUpdateProfile(profile)
            .then(result => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen py-10 bg-base-200">
                <div className="hero-content flex-col w-4/5 md:w-3/5">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered mb-3" required />
                                <p className='text-red-700 font-semibold'>{emailError}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered mb-3" required />
                                <p className='text-red-700 font-semibold'>{passwordError}</p>
                                <p className='text-red-700 font-semibold'>{error}</p>
                                <div className="mt-5 flex flex-col text-left">
                                    <p className="text-sm font-medium link-hover">Already Have an Account?<Link to="/login" >Login</Link></p>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg">Register Here</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;