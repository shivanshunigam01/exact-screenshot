import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/invoices")({
  head: () => ({ meta: [{ title: "Invoices | Your ALBA" }, { name: "description", content: "View and download your ALBA WELLNESS invoice records." }, { property: "og:title", content: "Invoices | Your ALBA" }, { property: "og:description", content: "A record of your ALBA visits and payments." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="invoices" />,
});