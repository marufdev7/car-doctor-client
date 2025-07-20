import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About />
            <Services />
            <Contact />
            <Products/>
        </div>
    );
};

export default Home;