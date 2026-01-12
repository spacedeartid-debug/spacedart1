import { Metadata } from "next";
import { AboutTemplate } from "@/components/templates/AboutTemplate";

export const metadata: Metadata = {
    title: "Space D Art | About",
    description: "We believe in design that serves well-being. Blending organic warmth with architectural precision.",
    openGraph: {
        title: "Space D Art | About",
        description: "We believe in design that serves well-being. Blending organic warmth with architectural precision.",
        images: ["/assets/3.webp"],
    },
};

export default function AboutPage() {
    return <AboutTemplate />;
}
