import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/admin/payments")({
  head: () => ({ meta: [{ title: "Payments | ALBA Management" }, { name: "description", content: "Review ALBA WELLNESS demo payments and collections." }, { property: "og:title", content: "Payments | ALBA Management" }, { property: "og:description", content: "Review ALBA WELLNESS demo payments and collections." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="payments" />,
});
