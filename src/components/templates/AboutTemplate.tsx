"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export function AboutTemplate() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8">About Us</h1>
                    <p className="text-xl text-zinc-300 leading-relaxed mb-12">
                        We believe in the power of frictionless luxury, where the primary purpose of a space is to serve the physical and mental well-being of those within it.
                    </p>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0">
                            <Image
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop"
                                fill
                                alt="Our Philosophy"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 -z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-4 text-sm">Our Philosophy</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6">Frictionless Luxury</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            While we remain uncompromising in our pursuit of a sharp, modern aesthetic, we never sacrifice human comfort for the sake of a silhouette. The resulting design is a seamless blend of organic warmth and architectural precision.
                        </p>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            This ensures a home that does not demand a "mental tax" from its inhabitants, but instead provides an effortless sanctuary that functions as beautifully as it looks.
                        </p>
                        <p className="text-zinc-400 leading-relaxed italic border-l-2 border-neon-blue pl-4">
                            "We believe in a future where design is felt as much as it is seen; our core remains dedicated to the quiet, enduring harmony of a perfectly balanced life."
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
