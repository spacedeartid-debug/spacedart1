import { Metadata } from "next";
import { ContactTemplate } from "@/components/templates/ContactTemplate";

export const metadata: Metadata = {
    title: "Space D Art | Contact",
    description: "Ready to build the future? Reach out to Space D Art for consultations and project inquiries in Rajkot.",
    openGraph: {
        title: "Space D Art | Contact",
        description: "Ready to build the future? Reach out to Space D Art for consultations and project inquiries in Rajkot.",
        images: ["/assets/hero-image.jpg"],
    },
};

export default function ContactPage() {
    return <ContactTemplate />;
}
