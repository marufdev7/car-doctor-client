import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 bg-base-200 rounded-md shadow-md hover:shadow-xl transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
            <div className="text-center">
                <div className="rating mb-2">
                    {Array(product.rating)
                        .fill()
                        .map((_, idx) => (
                            <span key={idx} className="text-orange-400 text-xl">★</span>
                        ))}
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-[#FF3811] font-bold">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
