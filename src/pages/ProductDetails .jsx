import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/autumn"; // Assume this imports your product data

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-28">
            <div className="grid lg:grid-cols-2 gap-8 shadow-lg bg-white p-8 border-2 rounded-lg">
                <div>
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl text-indigo-600 mb-6">
                            {product.title}
                        </p>
                        <p className="text-gray-600 mb-6">{product.text}</p>
                        <p className="text-gray-600 mb-6">
                            {product.Manufacturer}
                        </p>
                        <p className="text-gray-600 mb-6">{product.Size}</p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
