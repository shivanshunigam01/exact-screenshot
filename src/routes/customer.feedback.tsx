import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/feedback")({
  head: () => ({ meta: [{ title: "Feedback | Your ALBA" }, { name: "description", content: "Share a note about your ALBA WELLNESS visit." }, { property: "og:title", content: "Feedback | Your ALBA" }, { property: "og:description", content: "Share a note about your ALBA WELLNESS visit." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="feedback" />,
});
