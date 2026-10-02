import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/reports")({
  head: () => ({ meta: [{ title: "Reports | ALBA Management" }, { name: "description", content: "Explore demo bookings, treatment demand and revenue trends at ALBA WELLNESS." }, { property: "og:title", content: "Reports | ALBA Management" }, { property: "og:description", content: "Studio activity and revenue reporting." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="reports" />,
});