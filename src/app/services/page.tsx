import { Metadata } from "next";
import { ServicesTemplate } from "@/components/templates/ServicesTemplate";

export const metadata: Metadata = {
    title: "Space D Art | Services",
    description: "Comprehensive design solutions: Interior Design, 3D Modelling, Conceptual Art, and Space Planning.",
    openGraph: {
        title: "Space D Art | Services",
        description: "Comprehensive design solutions: Interior Design, 3D Modelling, Conceptual Art, and Space Planning.",
        images: ["/assets/2.webp"],
    },
};

export default function ServicesPage() {
    return <ServicesTemplate />;
}
