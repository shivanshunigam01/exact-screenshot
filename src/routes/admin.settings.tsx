import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings | ALBA Management" }, { name: "description", content: "Manage ALBA WELLNESS demo preferences and restore sample data." }, { property: "og:title", content: "Settings | ALBA Management" }, { property: "og:description", content: "ALBA studio preferences and demo data controls." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="settings" />,
});