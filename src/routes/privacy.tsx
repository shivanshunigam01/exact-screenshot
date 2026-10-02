import { createFileRoute } from "@tanstack/react-router";
import { InteriorPage } from "@/components/alba-pages";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy" }, { name: "description", content: "ALBA WELLNESS looks after guest details with care." }, { property: "og:title", content: "Privacy" }, { property: "og:description", content: "ALBA WELLNESS looks after guest details with care." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InteriorPage eyebrow="ALBA WELLNESS" title="Privacy" description="ALBA WELLNESS looks after guest details with care."><section className="alba-section"><div className="alba-wrap max-w-3xl text-sm leading-7 text-muted-foreground"><p>ALBA WELLNESS looks after guest details with care. This demonstration keeps guest details in your browser only. Technology platform by INFIYOURA.</p></div></section></InteriorPage>,
});
