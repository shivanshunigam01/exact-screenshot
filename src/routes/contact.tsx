import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/alba-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | ALBA WELLNESS Ahmedabad" }, { name: "description", content: "Contact the ALBA WELLNESS guest team in Ahmedabad about treatments, visits and appointments." }, { property: "og:title", content: "Contact | ALBA WELLNESS Ahmedabad" }, { property: "og:description", content: "We would love to welcome you to ALBA WELLNESS." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ContactPage,
});