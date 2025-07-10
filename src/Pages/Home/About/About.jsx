import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero h-[70vh]">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className='w-3/4 rounded-lg shadow-2xl' alt="" />
                    <img className='w-1/2 absolute rounded-lg shadow-2xl right-5 top-1/2 border-8 border-white ' src={parts} alt="" />
                </div>
                <div className="lg:w-1/2 ml-5">
                    <h4 className='text-red-500 font-bold mb-3'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;