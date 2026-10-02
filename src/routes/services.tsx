import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/alba-pages";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Treatments | ALBA WELLNESS" }, { name: "description", content: "Browse Korean-inspired head spa, scalp care and wellness rituals at ALBA WELLNESS, Ahmedabad." }, { property: "og:title", content: "Treatments | ALBA WELLNESS" }, { property: "og:description", content: "Find the ALBA ritual that feels right for you." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ServicesPage,
});