import { motion } from "framer-motion";
import { Link } from "lucide-react";
import React from "react";
import { BsTelegram } from "react-icons/bs";

const TelegramButton = () => {
    return (
        <motion.div
            className="fixed bottom-12 right-4 flex justify-end  items-center border-2 border-zinc-400/25 z-50 space-x-2 p-2 px-11 bg-white rounded-full shadow-lg animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="text-xl text-gray-700  font-medium">
                <span> Bizga yozing!</span>
            </div>
            <Link
                to="https://t.me/ulugbekeshnazarovuz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10  bg-blue-500 rounded-full text-white shadow-lg"
            >
                <BsTelegram className="text-2xl" />
            </Link>
        </motion.div>
    );
};

export default TelegramButton;
