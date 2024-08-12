import { motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";

const Product = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandToggle = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    const handleImageSelect = useCallback((index) => {
        setSelectedImage(index);
    }, []);

    const renderThumbnails = useMemo(() => {
        return product.images.map((image, index) => (
            <motion.img
                key={image.id}
                src={image.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageSelect(index)}
                className={`w-20 h-20 object-cover cursor-pointer rounded-lg shadow-lg ${
                    selectedImage === index
                        ? "border-4 border-indigo-500"
                        : "border-2 border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            />
        ));
    }, [product.images, selectedImage, handleImageSelect]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div>
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={product.images[selectedImage].full}
                            alt={`${product.name} - Image ${selectedImage + 1}`}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                        {renderThumbnails}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl text-indigo-600 mb-6">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-gray-600 mb-6">
                            {product.shortDescription}
                        </p>
                        {product.inStock ? (
                            <p className="text-green-600 mb-4">In Stock</p>
                        ) : (
                            <p className="text-red-600 mb-4">Out of Stock</p>
                        )}
                    </div>

                    <div>
                        <button
                            onClick={handleExpandToggle}
                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded"
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? "Hide details" : "Show more details"}
                        </button>
                        <motion.div
                            initial={false}
                            animate={{ height: isExpanded ? "auto" : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            {isExpanded && (
                                <div className="mt-4">
                                    <p className="text-gray-600">
                                        {product.fullDescription}
                                    </p>
                                    <ul className="list-disc list-inside mt-4 text-gray-600">
                                        {product.features.map(
                                            (feature, index) => (
                                                <li key={index}>{feature}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!product.inStock}
                        >
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
