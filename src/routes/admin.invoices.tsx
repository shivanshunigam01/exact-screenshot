import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/invoices")({
  head: () => ({ meta: [{ title: "Invoices & Payments | ALBA Management" }, { name: "description", content: "Review demo invoice and payment status for ALBA WELLNESS appointments." }, { property: "og:title", content: "Invoices & Payments | ALBA Management" }, { property: "og:description", content: "ALBA WELLNESS payment records and invoice-ready bookings." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="invoices" />,
});