import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/staff")({
  head: () => ({ meta: [{ title: "Team | ALBA Management" }, { name: "description", content: "Meet the ALBA WELLNESS demo treatment team." }, { property: "og:title", content: "Team | ALBA Management" }, { property: "og:description", content: "ALBA WELLNESS team and treatment specialties." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="staff" />,
});