import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/alba-pages";

export const Route = createFileRoute("/staff")({
  head: () => ({ meta: [{ title: "Team Workspace | ALBA WELLNESS" }, { name: "description", content: "View the ALBA WELLNESS staff workspace in demo mode." }, { property: "og:title", content: "Team Workspace | ALBA WELLNESS" }, { property: "og:description", content: "The ALBA team workspace in demo mode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <AdminPage view="staff" />,
});