import { createFileRoute } from "@tanstack/react-router";
import { CustomerPage } from "@/components/alba-pages";

export const Route = createFileRoute("/customer/profile")({
  head: () => ({ meta: [{ title: "Profile | Your ALBA" }, { name: "description", content: "Manage your saved guest details for ALBA WELLNESS." }, { property: "og:title", content: "Profile | Your ALBA" }, { property: "og:description", content: "Your guest details and preferences." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CustomerPage view="profile" />,
});