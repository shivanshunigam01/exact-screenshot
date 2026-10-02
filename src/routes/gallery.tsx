import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/alba-pages";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Our Space | ALBA WELLNESS" }, { name: "description", content: "Take a look inside the calm, private treatment rooms and rituals at ALBA WELLNESS." }, { property: "og:title", content: "Our Space | ALBA WELLNESS" }, { property: "og:description", content: "A sanctuary for the senses in Ahmedabad." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: GalleryPage,
});