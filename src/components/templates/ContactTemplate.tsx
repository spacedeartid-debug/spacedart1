"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ContactTemplate() {
    return (
        <main className="min-h-screen bg-space-black text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-6 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">Contact Us</h1>
                    <p className="max-w-xl mx-auto text-zinc-400 text-lg">
                        Ready to start your journey? Reach out to us for a consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    {/* Contact Form Replacement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 p-8 border border-white/10 rounded-sm flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]"
                    >
                        <h3 className="text-2xl font-bold font-display uppercase">Send a Transmission</h3>
                        <p className="text-zinc-400">
                            Please fill out our secure transmission form to get in touch with our team.
                        </p>

                        <Link
                            href="https://forms.gle/shRjUi7meUAB1Gd1A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs"
                        >
                            <Button variant="neon" className="w-full h-12 text-lg">
                                Open Contact Form <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-2xl font-bold font-display uppercase mb-8">Coordinates</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Office</h4>
                                        <p className="text-zinc-400">401, Adarsh Plaza, near Raiya Telephone exchange,<br />150ft Ring Road, Rajkot, Gujarat</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Phone</h4>
                                        <p className="text-zinc-400">+91 9265738487</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-full text-neon-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-wider mb-1">Email</h4>
                                        <p className="text-zinc-400">info@spacedart.co.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-6 border-t border-white/10">
                            <h4 className="font-bold uppercase tracking-wider mb-4">Connect With Us</h4>
                            <div className="flex gap-4">
                                <Link href="https://www.instagram.com/space_d__art/" target="_blank" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-neon-blue hover:bg-white/10 transition-all">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </div>
                                </Link>
                                <Link href="https://www.facebook.com/Spacedeartt/" target="_blank" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-neon-blue hover:bg-white/10 transition-all">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </div>
                                </Link>
                                <Link href="https://x.com/spacedartstudio" target="_blank" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-neon-blue hover:bg-white/10 transition-all">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video w-full bg-zinc-800 rounded-sm overflow-hidden relative border border-white/10 mt-12">
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                                fill
                                alt="Map Location"
                                className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <a
                                    href="https://maps.app.goo.gl/sWAesgHduePb9eJe8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black/80 px-4 py-2 text-xs uppercase tracking-widest text-white border border-neon-blue pointer-events-auto hover:bg-neon-blue hover:text-black transition-colors"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
