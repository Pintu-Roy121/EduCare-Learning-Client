import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUserWithEamil, handleUpdateProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photourl = form.photourl.value;

        createUserWithEamil(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                UserUpdateProfile(name, photourl);
                toast.success('Successfully Log in')
                console.log(user);
            })
            .catch(error => {
                console.log(error);
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
                <div className="hero-content flex-col w-4/5 md:w-2/4">
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
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <div className="mt-5 flex flex-col text-left">
                                    <p className="text-sm font-medium link-hover">Already Have an Account?<Link to="/login" >Login</Link></p>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">REGISTER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;