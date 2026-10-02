import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Management Overview | ALBA WELLNESS" }, { name: "description", content: "Review ALBA WELLNESS demo bookings, guests, revenue and studio activity." }, { property: "og:title", content: "Management Overview | ALBA WELLNESS" }, { property: "og:description", content: "ALBA WELLNESS studio management in demo mode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="overview" />,
});