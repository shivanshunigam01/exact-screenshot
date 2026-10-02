import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/alba-pages";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [{ title: "Guest Stories | ALBA WELLNESS" }, { name: "description", content: "Read guest stories about Korean head spa and wellness rituals at ALBA WELLNESS." }, { property: "og:title", content: "Guest Stories | ALBA WELLNESS" }, { property: "og:description", content: "Thoughtful notes from ALBA WELLNESS guests." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ReviewsPage,
});