"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `/assets/${i + 1}.webp`,
}));

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">Portfolio</h1>
                    <p className="max-w-xl mx-auto text-zinc-400 text-lg">
                        A selection of our finest work across architectural, interior, and conceptual design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden aspect-video cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt="Portfolio Project"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
