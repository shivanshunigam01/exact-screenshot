import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/services")({
  head: () => ({ meta: [{ title: "Services | ALBA Management" }, { name: "description", content: "Manage the ALBA WELLNESS demo treatment menu." }, { property: "og:title", content: "Services | ALBA Management" }, { property: "og:description", content: "Review available treatments and their visibility." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="services" />,
});