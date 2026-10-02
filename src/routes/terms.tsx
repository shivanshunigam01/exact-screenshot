import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/components/alba-pages";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms" }, { name: "description", content: "Appointments at ALBA WELLNESS can be rescheduled or cancelled from your guest portal." }, { property: "og:title", content: "Terms" }, { property: "og:description", content: "Appointments at ALBA WELLNESS can be rescheduled or cancelled from your guest portal." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InteriorPage eyebrow="ALBA WELLNESS" title="Terms" description="Appointments at ALBA WELLNESS can be rescheduled or cancelled from your guest portal."><section className="alba-section"><div className="alba-wrap max-w-3xl text-sm leading-7 text-muted-foreground"><p>Appointments at ALBA WELLNESS can be rescheduled or cancelled from your guest portal. This demonstration keeps guest details in your browser only. Technology platform by INFIYOURA.</p></div></section></InteriorPage>,
});
