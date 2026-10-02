import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer")({
  head: () => ({ meta: [{ title: "Your ALBA | Customer Portal" }, { name: "description", content: "View your ALBA WELLNESS appointments, profile and invoices." }, { property: "og:title", content: "Your ALBA | Customer Portal" }, { property: "og:description", content: "Your visits and thoughtful care in one place." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="overview" />,
});