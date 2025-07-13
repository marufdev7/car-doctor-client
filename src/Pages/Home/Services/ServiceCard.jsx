import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card bg-base-200 w-96 shadow-xl">
            <figure className="px-8 pt-8">
                <img
                    src={img}
                    alt="car"
                    className="rounded-xl w-80 h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions items-center">
                    <p className='font-bold text-red-500'>{price}$</p>
                    <button className="btn text-red-500 hover:bg-red-500 hover:text-white bg-white border-red-500">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;