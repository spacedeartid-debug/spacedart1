import { Metadata } from "next";
import { PortfolioTemplate } from "@/components/templates/PortfolioTemplate";

export const metadata: Metadata = {
    title: "Space D Art | Portfolio",
    description: "A curated collection of our finest work across architectural, interior, and conceptual design.",
    openGraph: {
        title: "Space D Art | Portfolio",
        description: "A curated collection of our finest work across architectural, interior, and conceptual design.",
        images: ["/assets/1.webp"],
    },
};

export default function PortfolioPage() {
    return <PortfolioTemplate />;
}
