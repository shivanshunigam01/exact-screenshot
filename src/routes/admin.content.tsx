import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/content")({
  head: () => ({ meta: [{ title: "Content | ALBA Management" }, { name: "description", content: "Edit ALBA WELLNESS public content." }, { property: "og:title", content: "Content | ALBA Management" }, { property: "og:description", content: "Edit ALBA WELLNESS public content." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="content" />,
});
