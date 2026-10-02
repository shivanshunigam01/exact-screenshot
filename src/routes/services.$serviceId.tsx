import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/alba-pages";

export const Route = createFileRoute("/services/$serviceId")({
  head: () => ({ meta: [{ title: "ALBA Wellness Treatment" }, { name: "description", content: "Explore treatment details and book a personalised wellness ritual at ALBA WELLNESS." }, { property: "og:title", content: "ALBA Wellness Treatment" }, { property: "og:description", content: "A personalised Korean-inspired wellness ritual." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ServiceDetailPage,
});