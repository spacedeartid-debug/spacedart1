"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Diya Katariya",
        image: "/reviews/Diya.png",
        content: "Working with SPACE D ART was a great experience. From the initial concept to the final execution, their team was attentive, detail-oriented, and creative. They balanced aesthetics with practicality and delivered the project on time. I truly appreciate their dedication and would definitely recommend them for anyone looking to transform their space.",
        rating: 5,
    },
    {
        name: "Manish Khetani",
        image: "/reviews/manish.png",
        content: "Space de Art creates designs that are not only beautiful but also very practical. They carefully balance style and functionality, making sure every space looks great while also being comfortable and easy to use.",
        rating: 5,
    },
    {
        name: "Dhruvin Surelia",
        image: "/reviews/dhravin.png",
        content: "I had amazing experience working with space de art every step was handled with professional ism creativity and attention to detail thank you",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2 text-sm">Testimonials</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
                        Client signals
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/30 border border-white/5 p-8 rounded-sm backdrop-blur-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h4 className="text-white font-bold font-display uppercase">{testimonial.name}</h4>
                                </div>
                                <p className="text-zinc-300 italic mb-6 leading-relaxed text-sm">&quot;{testimonial.content}&quot;</p>
                            </div>

                            <div className="flex gap-1 text-neon-blue">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
