import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/bookings")({
  head: () => ({ meta: [{ title: "Appointments | Your ALBA" }, { name: "description", content: "Review your ALBA WELLNESS visits and appointment details." }, { property: "og:title", content: "Appointments | Your ALBA" }, { property: "og:description", content: "Your ALBA appointment history and upcoming visits." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="bookings" />,
});