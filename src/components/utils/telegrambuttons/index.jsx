import { motion } from "framer-motion";
import React from "react";
import { FaTelegram } from "react-icons/fa6";

const TelegramButton = () => {
    return (
        <motion.div
            className="fixed top-[596px] right-4  z-50 backdrop-blur-md p-2 rounded-full flex justify-end items-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
        >
            <a
                href="https://t.me/ulugbekeshnazarovuz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-between "
            >
                <span className="text-xl text-gray-700 bg-white border-2 rounded-full px-5 py-2 font-medium shadow-lg inline-block  animate-pulse">
                    Bizga yozing!
                </span>
                <span className="w-14 h-14 rounded-full flex justify-center items-center text-black shadow-lg">
                    <FaTelegram className="w-8 h-8" />
                </span>
            </a>
        </motion.div>
    );
};

export default TelegramButton;
