import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/audit")({
  head: () => ({ meta: [{ title: "Audit log | ALBA Management" }, { name: "description", content: "Review ALBA WELLNESS demo activity." }, { property: "og:title", content: "Audit log | ALBA Management" }, { property: "og:description", content: "Review ALBA WELLNESS demo activity." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="audit" />,
});
