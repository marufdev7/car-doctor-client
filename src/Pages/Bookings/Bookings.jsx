import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Beared ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('❌ Are you sure you want to delete this?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('✅ Deleted Successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl'>My bookings:  {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>SEVICE</th>
                            <th>CUSTOMER NAME</th>
                            <th>PRICE</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =>
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleBookingConfirm={handleBookingConfirm}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;