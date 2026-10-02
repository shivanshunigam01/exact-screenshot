import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/reviews")({
  head: () => ({ meta: [{ title: "Reviews | ALBA Management" }, { name: "description", content: "Manage guest review highlights displayed on the ALBA WELLNESS demo site." }, { property: "og:title", content: "Reviews | ALBA Management" }, { property: "og:description", content: "Guest feedback and featured ALBA stories." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="reviews" />,
});