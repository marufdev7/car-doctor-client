import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, price, service, img, date, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-lg h-16 w-16">
                            <img
                                src={img}
                                alt="Avatar" />
                        </div>
                    </div>
                    <div className="font-bold">{service}</div>
                </div>
            </td>
            <td>{customerName}</td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className='font-bold text-success'>Confimred</span>
                        :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;