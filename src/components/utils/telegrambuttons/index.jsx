import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React from "react";

const TelegramButton = () => {
    return (
        <motion.div
            className="fixed bottom-12 right-4 flex justify-end items-center border-2 border-zinc-400/25 z-50 space-x-2 p-2 px-11 bg-white rounded-full shadow-lg animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="text-xl text-gray-700 font-medium">
                <span>Bizga yozing!</span>
            </div>
            <a
                href="https://t.me/ulugbekeshnazarovuz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full text-black shadow-lg border"
            >
                <Send className="w-8 h-8" />
            </a>
        </motion.div>
    );
};

export default TelegramButton;
