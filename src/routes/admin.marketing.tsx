import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/marketing")({
  head: () => ({ meta: [{ title: "Marketing | ALBA Management" }, { name: "description", content: "Prepare guest messages for ALBA WELLNESS." }, { property: "og:title", content: "Marketing | ALBA Management" }, { property: "og:description", content: "Prepare guest messages for ALBA WELLNESS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="marketing" />,
});
