"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Placeholder images - in production these would be local assets or Cloudinary URLs
const projects = [
    {
        id: 1,
        image: "/assets/1.webp",
        alt: "Modern Luxury Living Room Design with Futuristic Lighting",
    },
    {
        id: 2,
        image: "/assets/2.webp",
        alt: "Futuristic Commercial Office Space Rendering",
    },
    {
        id: 3,
        image: "/assets/3.webp",
        alt: "Minimalist Interior Architecture and zen space planning",
    },
    {
        id: 4,
        image: "/assets/4.webp",
        alt: "Bespoke Furniture Design and Concept Art",
    }
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-space-dark">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-16">
                    <div>
                        <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2 text-sm">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                            Selected Works
                        </h3>
                    </div>
                    <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-neon-blue transition-colors uppercase tracking-widest text-sm">
                        View All Projects <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                        >
                            <Link href="/portfolio">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-white hover:text-neon-blue transition-colors uppercase tracking-widest text-sm">
                        View All Projects <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
