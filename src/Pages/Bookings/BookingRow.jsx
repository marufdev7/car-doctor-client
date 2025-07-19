import React from 'react';

const BookingRow = ({ booking }) => {
    const { customerName, price, service, img, date } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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