import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, _id, img } = service;
    // console.log(img);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const booking = {
            customerName: form.name.value,
            date: form.date.value,
            email: form.email.value,
            service: title,
            service_id: _id,
            price: price,
            img,
        };
        // console.log("Order submitted:", message, booking);

        //insert data to db
        fetch('https://car-doctor-server-rosy-nu.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('✅ Booking confirmed!');
                    form.reset();
                    navigate("/bookings", { replace: true });
                }
            })
            .catch(err => console.error('Booking error:', err));

    };
    return (
        <>
            <h2 className="text-3xl font-semibold text-center mb-6">Chosen Service: {title}</h2>
            <div className="p-6 bg-base-200 rounded-lg shadow-md mx-auto my-10">
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                placeholder="Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                type="date"
                                name="date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input
                                type="text"
                                // name="due"
                                defaultValue={'$' + price}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea
                            name="message"
                            className="textarea textarea-bordered w-full"
                            placeholder="Your message here"
                            rows="4"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn w-full text-white bg-[#FF3811] hover:bg-red-500"
                    >
                        Order Confirm
                    </button>
                </form>
            </div>
        </>
    );
};

export default CheckOut;