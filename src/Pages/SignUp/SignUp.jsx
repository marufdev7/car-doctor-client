import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSingUp = e => {
        e.prevetDefault();
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className="text-4xl font-semibold text-center">Login</h1>
                        <form onSubmit={handleSingUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-[#FF3811] text-white hover:bg-red-600' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='mt-5 text-center'>Already have an account?<Link className='text-red-500 font-semibold hover:underline' to="/login"> Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;