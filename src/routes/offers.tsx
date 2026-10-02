import { createFileRoute } from "@tanstack/react-router";
import { OffersPage } from "@/components/alba-pages";

export const Route = createFileRoute("/offers")({
  head: () => ({ meta: [{ title: "Offers | ALBA WELLNESS" }, { name: "description", content: "See the current welcome offers and thoughtful extras from ALBA WELLNESS." }, { property: "og:title", content: "Offers | ALBA WELLNESS" }, { property: "og:description", content: "A welcome, from ALBA." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: OffersPage,
});