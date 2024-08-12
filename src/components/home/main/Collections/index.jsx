import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import products from "../../../../assets/data/autumn";

const Collections = () => {
    return (
        <div className="container-full mx-auto px-6 py-8">
            <div className="mb-5 py-6">
                <h3 className="text-6xl font-bold font-sans text-center text-black">
                    Qish kolleksiyasi
                </h3>
                <p className="text-center text-xl text-black font-sans font-medium">
                    Buxoro tabiiy mahsuloti
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className=" cursor-pointer border p-4 rounded-lg shadow-lg"
                        initial={{ scale: 1 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            duration: 0.6,
                            damping: 20,
                        }}
                    >
                        <motion.img
                            src={product.img}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-md mb-4"
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.h2
                            className="text-xl font-bold"
                            whileHover={{ color: "#4f46e5" }}
                            transition={{ duration: 0.4 }}
                        >
                            {product.name}
                        </motion.h2>
                        <p className="text-gray-600">{product.category}</p>
                        <Link
                            to={`/product/${product.id}`}
                            className="text-indigo-600 hover:text-indigo-900 mt-4 inline-block"
                        >
                            View Details
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collections;
