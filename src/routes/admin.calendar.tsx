import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/calendar")({
  head: () => ({ meta: [{ title: "Calendar | ALBA Management" }, { name: "description", content: "View the ALBA WELLNESS appointment calendar." }, { property: "og:title", content: "Calendar | ALBA Management" }, { property: "og:description", content: "View the ALBA WELLNESS appointment calendar." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="calendar" />,
});
