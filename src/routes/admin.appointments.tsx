import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/appointments")({
  head: () => ({ meta: [{ title: "Appointments | ALBA Management" }, { name: "description", content: "Manage ALBA WELLNESS demo appointments and visit status." }, { property: "og:title", content: "Appointments | ALBA Management" }, { property: "og:description", content: "Review and manage studio bookings." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="appointments" />,
});