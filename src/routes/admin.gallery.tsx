import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Gallery | ALBA Management" }, { name: "description", content: "Manage ALBA WELLNESS gallery photographs." }, { property: "og:title", content: "Gallery | ALBA Management" }, { property: "og:description", content: "Manage ALBA WELLNESS gallery photographs." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="gallery" />,
});
