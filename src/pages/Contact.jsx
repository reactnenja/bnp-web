import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
    return (
        <main id="main" className="flex flex-col items-center w-full">
            <div className="w-full max-w-7xl py-16 px-4">
                <section className="flex flex-wrap items-start justify-center py-8">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 p-4">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-4xl font-black">Aloqa</h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <form
                                className="space-y-4"
                                action="/contact-us/#wpcf7-f81-p82-o1"
                                method="post"
                            >
                                <input type="hidden" name="_wpcf7" value="81" />
                                <input
                                    type="hidden"
                                    name="_wpcf7_version"
                                    value="5.8.7"
                                />
                                <input
                                    type="hidden"
                                    name="_wpcf7_locale"
                                    value="en_US"
                                />
                                <input
                                    type="hidden"
                                    name="_wpcf7_unit_tag"
                                    value="wpcf7-f81-p82-o1"
                                />
                                <input
                                    type="hidden"
                                    name="_wpcf7_container_post"
                                    value="82"
                                />
                                <input
                                    type="hidden"
                                    name="_wpcf7_posted_data_hash"
                                    value=""
                                />

                                <label>
                                    <input
                                        className="border p-2 w-full"
                                        placeholder="Sizning elektron pochtangiz"
                                        type="email"
                                        name="email-832"
                                        required
                                    />
                                </label>

                                <label>
                                    <input
                                        className="border p-2 w-full"
                                        placeholder="Telefon raqami"
                                        type="text"
                                        name="text-392"
                                        required
                                    />
                                </label>

                                <label>
                                    <textarea
                                        className="border p-2 w-full"
                                        placeholder="Sizning xabaringiz shu yerda"
                                        name="YourMessageHere"
                                    ></textarea>
                                </label>

                                <input
                                    className="bg-zinc-800 w-full text-white p-3 cursor-pointer"
                                    type="submit"
                                    value="Submit"
                                />
                            </form>
                        </motion.div>
                    </div>

                    {/* Google Map */}
                    <div className="w-full md:w-1/2 p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="h-[300px] md:h-[600px] w-full">
                                <iframe
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&t=m&z=17&output=embed&iwloc=near"
                                    title="Location"
                                    aria-label="Map Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
                    <div className="p-4 bg-white shadow-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Biz bilan bog'lanish
                                </h4>
                                <p>
                                    E-mail:{" "}
                                    <a
                                        href="mailto:info@yourdomain.com"
                                        className="text-blue-500"
                                    >
                                        info@yourdomain.com
                                    </a>
                                </p>
                                <p>Tel: +1 234 567 890</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-white shadow-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Bizning manzilimiz
                                </h4>
                                <p>1234 Street Name, City, Country</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="p-4 bg-white shadow-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold">
                                    Bizning soatlar
                                </h4>
                                <p>Dushanba - Jum'a: 9:00 - 18:00</p>
                                <p>Shanba: 10:00 - 14:00</p>
                                <p>Yakshanba: Dam olish kuni</p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Contact;
