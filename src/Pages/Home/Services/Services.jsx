import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-rosy-nu.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-10'>
            <div className='text-center my-5'>
                <h4 className="font-bold text-red-500">Services</h4>
                <h1 className="font-bold text-5xl">Our Service Area</h1>
                <p className="text-gray-600 py-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <div className="text-center mt-10">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                    More Services
                </button>
            </div>
        </div>
    );
};

export default Services;