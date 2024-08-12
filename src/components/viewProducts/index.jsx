import React from "react";
import { Link } from "react-router-dom";
import products from "../../assets/data/autumn"; // Assume this imports your product data

const Product = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-64 object-cover mb-4"
                            />
                            <h2 className="text-xl font-bold">
                                {product.name}
                            </h2>
                            <p className="text-gray-600">{product.category}</p>
                            <Link
                                to={`/product/${product.id}`}
                                className="text-indigo-600 hover:text-indigo-900 mt-4 inline-block"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            );
        </div>
    );
};

export default Product;
