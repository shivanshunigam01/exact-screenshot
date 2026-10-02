import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [{ title: "Guests | ALBA Management" }, { name: "description", content: "Browse guest records in the ALBA WELLNESS demo." }, { property: "og:title", content: "Guests | ALBA Management" }, { property: "og:description", content: "The ALBA guest community and visit history." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="customers" />,
});