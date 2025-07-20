import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="text-center mb-8">
                <h4 className="text-[#FF3811] font-bold uppercase">Popular Products</h4>
                <h2 className="text-3xl md:text-4xl font-bold my-2">Browse Our Products</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                    More Products
                </button>
            </div>
        </div>
    );
};

export default Products;