import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/history")({
  head: () => ({ meta: [{ title: "Booking history | Your ALBA" }, { name: "description", content: "Review earlier ALBA WELLNESS visits." }, { property: "og:title", content: "Booking history | Your ALBA" }, { property: "og:description", content: "Review earlier ALBA WELLNESS visits." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="history" />,
});
