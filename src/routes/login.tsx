import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/alba-pages";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in | ALBA WELLNESS" }, { name: "description", content: "Choose a demo role to explore the ALBA WELLNESS customer and team spaces." }, { property: "og:title", content: "Sign in | ALBA WELLNESS" }, { property: "og:description", content: "Explore ALBA WELLNESS in demo mode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: LoginPage,
});