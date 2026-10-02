import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/alba-pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "Our Story | ALBA WELLNESS" }, { name: "description", content: "Discover the care, intention and Korean-inspired rituals behind ALBA WELLNESS in Ahmedabad." }, { property: "og:title", content: "Our Story | ALBA WELLNESS" }, { property: "og:description", content: "A softer pace. A deeper kind of care at ALBA WELLNESS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: AboutPage,
});