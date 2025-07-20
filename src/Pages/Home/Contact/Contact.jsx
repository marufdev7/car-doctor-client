import React from 'react';
import calender from '../../../assets/icons-contact/calender.svg';
import call from '../../../assets/icons-contact/call.svg';
import location from '../../../assets/icons-contact/location.svg';


const Contact = () => {
    return (
        <div>
            <footer className=" flex flex-col gap-3 items-center md:flex-row md:justify-between bg-slate-800 rounded text-white lg:px-16 lg:py-16">
                <nav className='flex items-center gap-2'>
                    <img src={calender} alt="calender icon" className="w-10 h-10 object-contain" />
                    <div>
                        <h6 className="font-semibold">We are opening sunday-thursday</h6>
                        <h4 className="font-bold text-lg">8:00 am - 9:00 pm</h4>
                    </div>
                </nav>
                <nav className='flex items-center gap-2'>
                    <img src={call} alt="call icon" className="w-10 h-10 object-contain" />
                    <div>
                        <h6 className="font-semibold">Have a question?</h6>
                        <h4 className="font-bold text-lg">+8801521-212121</h4>
                    </div>
                </nav>
                <nav className='flex items-center gap-2'>
                    <img src={location} alt="location icon" className="w-10 h-10 object-contain" />
                    <div>
                        <h6 className="font-semibold">Need a repair? Our address</h6>
                        <h4 className="font-bold text-lg">8/A, Dhanmondi, Dhaka.</h4>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Contact;