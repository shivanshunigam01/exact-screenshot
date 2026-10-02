import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/offers")({
  head: () => ({ meta: [{ title: "Offers | ALBA Management" }, { name: "description", content: "Review and update demo ALBA WELLNESS guest offers." }, { property: "og:title", content: "Offers | ALBA Management" }, { property: "og:description", content: "Keep ALBA welcome offers up to date." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="offers" />,
});