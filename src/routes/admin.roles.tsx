import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/roles")({
  head: () => ({ meta: [{ title: "Roles | ALBA Management" }, { name: "description", content: "Manage ALBA WELLNESS demo roles and permissions." }, { property: "og:title", content: "Roles | ALBA Management" }, { property: "og:description", content: "Manage ALBA WELLNESS demo roles and permissions." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="roles" />,
});
