import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/rewards")({
  head: () => ({ meta: [{ title: "Rewards | Your ALBA" }, { name: "description", content: "See your ALBA WELLNESS loyalty points." }, { property: "og:title", content: "Rewards | Your ALBA" }, { property: "og:description", content: "See your ALBA WELLNESS loyalty points." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="rewards" />,
});
