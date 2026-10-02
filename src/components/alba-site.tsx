import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { albaImages } from "@/lib/alba-images";

const links = [
  ["About", "/about"],
  ["Treatments", "/services"],
  ["Offers", "/offers"],
  ["Our space", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function AlbaHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-ivory/15 text-ivory">
      <div className="alba-wrap grid h-[76px] grid-cols-[1fr_auto] items-center sm:flex sm:justify-between">
        <Link to="/" className="group flex min-w-0 items-center gap-3 text-ivory no-underline">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-champagne/70 font-display text-xl text-champagne">A</span>
          <span className="leading-tight"><span className="block text-[12px] font-semibold tracking-[0.18em]">ALBA</span><span className="block text-[9px] tracking-[0.2em] text-ivory/65">WELLNESS</span></span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map(([label, to]) => <Link key={to} to={to} className={`text-[11px] tracking-[0.08em] no-underline transition-colors hover:text-champagne ${location.pathname === to ? "text-champagne" : "text-ivory/80"}`}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link to="/login" className="text-[11px] text-ivory/75 no-underline hover:text-champagne">Sign in</Link>
          <Button asChild className="h-10 rounded-none bg-champagne px-5 text-[10px] font-semibold tracking-[0.12em] text-ink hover:bg-champagne/80"><Link to="/booking">BOOK A RITUAL <ArrowRight /></Link></Button>
        </div>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="text-ivory hover:bg-ivory/10 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-ivory/15 bg-ink/95 px-6 py-4 lg:hidden" aria-label="Mobile navigation">{links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-ivory/10 py-3 text-sm text-ivory no-underline">{label}</Link>)}<Link to="/login" className="block py-3 text-sm text-ivory no-underline">Customer & team sign in</Link><Button asChild className="mt-2 w-full rounded-none bg-champagne text-ink"><Link to="/booking">Book an appointment</Link></Button></nav>}
    </header>
  );
}

export function AlbaFooter() {
  return <footer className="dark-panel">
    <div className="alba-wrap grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
      <div><Link to="/" className="inline-flex items-center gap-3 text-ivory no-underline"><span className="grid h-9 w-9 place-items-center border border-champagne/70 font-display text-xl text-champagne">A</span><span className="text-xs tracking-[0.18em]">ALBA WELLNESS</span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-ivory/60">Korean-inspired rituals for a softer pace, a nourished scalp and a more rested you.</p></div>
      <div><p className="alba-eyebrow">Explore</p><div className="mt-4 grid gap-3">{links.slice(0, 4).map(([label, to]) => <Link key={to} to={to} className="text-sm text-ivory/70 no-underline hover:text-champagne">{label}</Link>)}</div></div>
      <div><p className="alba-eyebrow">Visit us</p><p className="mt-4 text-sm leading-7 text-ivory/70">Ahmedabad, Gujarat<br/>Every day · 10:00 AM–8:00 PM<br/>+91 XXXXX XXXXX</p><Link to="/contact" className="mt-3 inline-block text-xs text-champagne no-underline">Get in touch <ArrowRight className="ml-1 inline size-3" /></Link></div>
      <div><p className="alba-eyebrow">A little note</p><p className="mt-4 text-sm leading-7 text-ivory/70">A private moment of calm, thoughtfully made for you.</p><div className="mt-5 flex gap-4"><a href="https://instagram.com" aria-label="Instagram" className="text-ivory/70 hover:text-champagne"><Instagram className="size-4" /></a><a href="tel:+910000000000" aria-label="Call ALBA WELLNESS" className="text-ivory/70 hover:text-champagne"><Phone className="size-4" /></a></div></div>
    </div>
    <div className="alba-wrap flex flex-col gap-2 border-t border-ivory/10 py-5 text-[10px] text-ivory/45 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 ALBA WELLNESS. All rights reserved.</span><span>Technology partner <strong className="font-semibold tracking-[0.16em] text-ivory/65">INFIYOURA</strong> · IT SERVICES & DIGITAL SOLUTIONS</span></div>
  </footer>;
}

export function AlbaLayout({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className="min-h-screen bg-background text-foreground"><div className={dark ? "dark-panel" : ""}><AlbaHeader /></div>{children}<AlbaFooter /></div>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) { return <p className="alba-eyebrow">{children}</p>; }

export function SectionHeading({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}><SectionEyebrow>{eyebrow}</SectionEyebrow><h2 className="editorial-title mt-4 text-5xl sm:text-6xl">{title}</h2>{body && <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{body}</p>}</div>;
}

export function AlbaServiceCard({ service, compact = false }: { service: import("@/lib/alba-demo").AlbaService; compact?: boolean }) {
  const image = albaImages[service.image as keyof typeof albaImages] ?? albaImages.treatment;
  return <article className="group overflow-hidden border border-border bg-card">
    <Link to="/services/$serviceId" params={{ serviceId: service.id }} className="block overflow-hidden"><div className="aspect-[4/3] overflow-hidden"><img src={image} width={1200} height={1008} loading="lazy" alt={`${service.name} at ALBA WELLNESS`} className="image-zoom h-full w-full object-cover" /></div></Link>
    <div className="p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><span className="alba-eyebrow">{service.category}</span><span className="text-[11px] text-muted-foreground">{service.duration} min</span></div><h3 className="mt-3 font-display text-3xl leading-tight">{service.name}</h3>{!compact && <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{service.description}</p>}<div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4"><div><span className="text-[10px] text-muted-foreground">FROM</span><p className="text-lg font-medium">₹{service.price.toLocaleString("en-IN")}</p></div><Button asChild variant="outline" className="rounded-none border-foreground/25"><Link to="/services/$serviceId" params={{ serviceId: service.id }}>DISCOVER <ArrowRight /></Link></Button></div></div>
  </article>;
}

export function SideNote({ text }: { text: string }) { return <div className="flex items-center gap-2 text-xs text-muted-foreground"><Sparkles className="size-3.5 text-forest"/>{text}</div>; }

export function ScrollCue() { return <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/60"><span className="text-[9px] tracking-[0.18em]">SCROLL TO EXPLORE</span><ArrowDown className="size-4 animate-bounce" /></div>; }