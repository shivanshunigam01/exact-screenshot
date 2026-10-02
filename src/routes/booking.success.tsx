import { createFileRoute } from "@tanstack/react-router";
import { BookingSuccessPage } from "@/components/alba-pages";

export const Route = createFileRoute("/booking/success")({
  head: () => ({ meta: [{ title: "Booking Confirmed | ALBA WELLNESS" }, { name: "description", content: "Your ALBA WELLNESS ritual is reserved. View appointment details and download your invoice." }, { property: "og:title", content: "Booking Confirmed | ALBA WELLNESS" }, { property: "og:description", content: "Your moment of calm is reserved." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: BookingSuccessPage,
});