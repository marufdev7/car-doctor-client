import React from 'react';

const BookingRow = ({ booking }) => {
    const { _id, customerName, price, service, img, date } = booking;
    
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(``)
                .then(res => res.json())
                .then(data => {
                console.log(data);
            })
        }
    }
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;