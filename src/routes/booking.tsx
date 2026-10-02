import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/alba-pages";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "Book a Ritual | ALBA WELLNESS" }, { name: "description", content: "Choose your ALBA treatment, appointment time, therapist and payment preference." }, { property: "og:title", content: "Book a Ritual | ALBA WELLNESS" }, { property: "og:description", content: "Make time for you with a personalised head spa ritual." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: BookingPage,
});