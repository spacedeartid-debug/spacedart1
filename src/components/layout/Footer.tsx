import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-space-dark border-t border-white/5 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="block relative w-48 h-12">
                            <Image
                                src="/logo.svg"
                                alt="Space D Art"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Premium architectural & interior design studio crafting futuristic spaces for tomorrow&apos;s living.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Explore</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Services</h3>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li>Interior Design</li>
                            <li>3D Modelling</li>
                            <li>Conceptual Art</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Connect</h3>
                        <div className="flex items-center gap-4 text-zinc-400">
                            <Link href="https://www.instagram.com/space_d__art/" target="_blank" className="hover:text-neon-blue transition-colors"><Instagram size={20} /></Link>
                            <Link href="https://www.facebook.com/Spacedeartt/" target="_blank" className="hover:text-neon-blue transition-colors"><Facebook size={20} /></Link>
                            {/* Removed Twitter/Linkedin as not provided, assuming only Insta/FB wanted or keep placeholders if unsure? User said "the socials icons in the footers whould work" implies enabling the ones present, but only gave 2 URLs. I will keep others as # or remove? "also add the abpve 2 socials icons... (aslo keep them as they are in footer )" suggests keeping the footer structure but making them work. I will update the 2 provided and leave others as # or remove if they don't exist. Safest to keep placeholders or remove if irrelevant. I'll keep them as # for now but update the 2 provided. */}
                            <Link href="https://x.com/spacedartstudio" target="_blank" className="hover:text-neon-blue transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/vishal-shingadia/" target="_blank" className="hover:text-neon-blue transition-colors"><Linkedin size={20} /></Link>
                        </div>
                        <div className="mt-6 text-sm text-zinc-500">
                            <p>info@spacedart.in</p>
                            <p>+91 9265738487</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Space D Art. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
