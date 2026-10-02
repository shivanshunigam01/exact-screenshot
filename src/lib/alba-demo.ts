export type AlbaService = {
  id: string;
  name: string;
  category: string;
  duration: number;
  price: number;
  description: string;
  image: string;
  benefits: string[];
  addOns: { name: string; price: number }[];
  active: boolean;
  discountPrice?: number;
  recommended?: string;
};

export type AlbaAppointment = {
  id: string;
  reference: string;
  customer: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  time: string;
  therapist: string;
  amount: number;
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled" | "No Show" | "Rescheduled";
  payment: "Paid" | "Pending" | "Partial" | "Failed" | "Refunded";
  paidAmount?: number;
  notes?: string;
  addons?: string[];
  txnId?: string;
  cancelReason?: string;
  invoiceNumber?: string;
};

export type AlbaOffer = {
  id: string;
  name: string;
  code: string;
  discount: string;
  active: boolean;
  start: string;
  end: string;
  serviceId: string;
  limit: number;
  used: number;
};

export type AlbaReview = {
  id: string;
  customer: string;
  service: string;
  therapist: string;
  quote: string;
  rating: number;
  featured: boolean;
  status: "Pending" | "Approved" | "Hidden";
  date: string;
};

export type AlbaStaff = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: string;
  photo?: string;
  status: "Active" | "Disabled";
  services: string[];
  start: string;
  end: string;
  leave: string[];
};

export type AlbaNotification = { id: string; text: string; read: boolean; time: string };
export type AlbaAudit = { id: string; user: string; action: string; date: string; time: string; ip: string; status: string };
export type AlbaSettings = {
  business: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  depositPercent: number;
  taxPercent: number;
  seoTitle: string;
  seoDescription: string;
  instagram: string;
};
export type AlbaAutomation = { id: string; name: string; enabled: boolean; whatsapp: boolean; email: boolean };
export type AlbaGalleryItem = { id: string; caption: string; image: string; published: boolean };
export type AlbaFaq = { id: string; question: string; answer: string; published: boolean };
export type PermissionKey = "Dashboard" | "Appointments" | "Customers" | "Services" | "Staff" | "Invoices" | "Payments" | "Reports" | "Marketing" | "Content" | "Settings";
export type AlbaRoleName = "Super Admin" | "Receptionist" | "Therapist" | "Accountant";

export type AlbaDemoStore = {
  services: AlbaService[];
  appointments: AlbaAppointment[];
  profile: { name: string; phone: string; email: string; dob: string; address: string; preferences: string };
  offers: AlbaOffer[];
  reviews: AlbaReview[];
  notifications: AlbaNotification[];
  staff: AlbaStaff[];
  settings: AlbaSettings;
  automations: AlbaAutomation[];
  gallery: AlbaGalleryItem[];
  faqs: AlbaFaq[];
  audit: AlbaAudit[];
  permissions: Record<AlbaRoleName, Record<PermissionKey, boolean>>;
  lastBookingId: string | null;
  campaigns: { id: string; name: string; channel: string; audience: string; message: string; status: string }[];
};

export const therapists = ["Maya Sharma", "Ananya Mehta", "Sofia Patel", "Diya Shah", "Rhea Desai"];

export const initialServices: AlbaService[] = [
  { id: "signature", name: "Signature Korean Head Spa", category: "Head Spa", duration: 60, price: 2499, description: "A complete scalp reset with a clarifying cleanse, warm water therapy and an unhurried head massage.", image: "treatment", benefits: ["Scalp clarity", "Deep relaxation", "Healthy-looking shine"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "detox", name: "Premium Scalp Detox Ritual", category: "Scalp Care", duration: 75, price: 3199, description: "A thoughtful deep-cleanse ritual that refreshes the scalp and restores a feeling of lightness.", image: "water", benefits: ["Clarifies buildup", "Balances the scalp", "Restores freshness"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Hair Nourishment", price: 699 }], active: true },
  { id: "relaxation", name: "Deep Relaxation Ritual", category: "Relaxation", duration: 45, price: 1999, description: "Slow, soothing pressure and warm towels invite your mind to settle and your shoulders to soften.", image: "calm", benefits: ["Eases tension", "Encourages rest", "A quiet reset"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "nourishment", name: "Hair & Scalp Nourishment", category: "Scalp Care", duration: 60, price: 2799, description: "A nourishing treatment with botanical oils and a restorative scalp massage.", image: "oils", benefits: ["Softens dry lengths", "Nourishes the scalp", "Adds a healthy finish"], addOns: [{ name: "Scalp Serum Ritual", price: 499 }, { name: "Hair Nourishment", price: 699 }], active: true },
  { id: "stress-relief", name: "Stress Relief Head Massage", category: "Wellness", duration: 45, price: 1799, description: "A focused, grounding head massage to ease the weight of a busy day.", image: "massage", benefits: ["Releases tension", "Grounding touch", "Restful pause"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "couple", name: "Couple Wellness Ritual", category: "Packages", duration: 75, price: 4999, description: "A shared sanctuary for two, with side-by-side head spa treatments and time to reconnect.", image: "couple", benefits: ["Shared experience", "Two therapists", "Special package value"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }], active: true },
  { id: "express", name: "Midweek Scalp Refresh", category: "Head Spa", duration: 30, price: 1299, description: "A considered refresh for the days you need a small moment of calm.", image: "scalp", benefits: ["Quick reset", "Gentle cleanse", "Easy to fit in"], addOns: [{ name: "Aromatherapy", price: 399 }], active: true },
  { id: "ritual-plus", name: "The Alba Signature Journey", category: "Packages", duration: 90, price: 3999, description: "Our most immersive ritual, bringing together scalp care, nourishing oils and a longer massage.", image: "ritual", benefits: ["Full ritual experience", "Extended massage", "Personalised finish"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }], active: true },
];

const people = [
  ["Aarav Shah", "98765 10001"], ["Meera Patel", "98765 10002"], ["Rohan Desai", "98765 10003"], ["Isha Mehta", "98765 10004"], ["Kabir Joshi", "98765 10005"],
  ["Anaya Trivedi", "98765 10006"], ["Vivaan Gandhi", "98765 10007"], ["Kiara Bhatt", "98765 10008"], ["Arjun Shah", "98765 10009"], ["Diya Patel", "98765 10010"],
  ["Reyansh Mehta", "98765 10011"], ["Aditi Desai", "98765 10012"], ["Advait Shah", "98765 10013"], ["Saanvi Joshi", "98765 10014"], ["Ishaan Patel", "98765 10015"],
  ["Myra Shah", "98765 10016"], ["Dhruv Mehta", "98765 10017"], ["Navya Desai", "98765 10018"], ["Veer Trivedi", "98765 10019"], ["Aanya Bhatt", "98765 10020"],
];

const today = new Date();
export const localIso = (offset = 0) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
const futureDate = localIso;

export function createInitialStore(): AlbaDemoStore {
  const appointments = Array.from({ length: 30 }, (_, index) => {
    const person = people[index % people.length] ?? ["Alba Guest", "98765 00000"];
    const service = initialServices[index % initialServices.length] ?? initialServices[0];
    const status: AlbaAppointment["status"] = index % 9 === 0 ? "Completed" : index % 13 === 0 ? "Pending" : "Confirmed";
    const payment: AlbaAppointment["payment"] = index % 7 === 0 ? "Pending" : index % 8 === 0 ? "Partial" : "Paid";
    const appointment: AlbaAppointment = {
      id: `appt-${index + 1}`,
      reference: `ALBA-2026-${10482 + index}`,
      customer: person[0] ?? "Alba Guest",
      phone: person[1] ?? "98765 00000",
      email: `${(person[0] ?? "guest").toLowerCase().replaceAll(" ", ".")}@mail.demo`,
      serviceId: service?.id ?? "signature",
      date: futureDate((index % 24) - 2),
      time: ["10:00 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM"][index % 7] ?? "10:00 AM",
      therapist: therapists[index % therapists.length] ?? therapists[0] ?? "Maya Sharma",
      amount: service?.price ?? 2499,
      status,
      payment,
      paidAmount: payment === "Pending" ? 0 : payment === "Partial" ? Math.round((service?.price ?? 2499) * 0.3) : service?.price ?? 2499,
      notes: index % 5 === 0 ? "Prefers a quieter room and light pressure." : "",
      invoiceNumber: `ALBA-INV-2026-${2401 + index}`,
    };
    if (payment !== "Pending") appointment.txnId = `TXN-ALBA-${880120 + index}`;
    return appointment;
  });

  return {
    services: initialServices,
    appointments,
    profile: { name: "Meera Patel", phone: "+91 98765 10002", email: "meera.patel@mail.demo", dob: "1995-06-14", address: "Bodakdev, Ahmedabad, Gujarat", preferences: "Light pressure, unscented oils, quiet room" },
    offers: [
      { id: "offer-1", name: "First Visit Ritual", code: "FIRSTVISIT20", discount: "20% OFF", active: true, start: futureDate(-10), end: futureDate(40), serviceId: "signature", limit: 80, used: 24 },
      { id: "offer-2", name: "Couple Wellness", code: "COUPLEALBA", discount: "₹500 OFF", active: true, start: futureDate(-5), end: futureDate(30), serviceId: "couple", limit: 40, used: 9 },
      { id: "offer-3", name: "Midweek Reset", code: "RESET15", discount: "15% OFF", active: true, start: futureDate(-2), end: futureDate(20), serviceId: "all", limit: 100, used: 18 },
      { id: "offer-4", name: "Scalp Care Edit", code: "SCALP10", discount: "10% OFF", active: true, start: futureDate(0), end: futureDate(25), serviceId: "detox", limit: 60, used: 7 },
      { id: "offer-5", name: "Returning Guest", code: "ALBAREPEAT", discount: "₹300 OFF", active: false, start: futureDate(-40), end: futureDate(-5), serviceId: "all", limit: 50, used: 50 },
    ],
    reviews: [
      { id: "review-1", customer: "Meera P.", service: "Signature Korean Head Spa", therapist: "Maya Sharma", quote: "A full hour of calm. The little details made the whole experience feel so considered.", rating: 5, featured: true, status: "Approved", date: futureDate(-12) },
      { id: "review-2", customer: "Isha M.", service: "Deep Relaxation Ritual", therapist: "Sofia Patel", quote: "Beautiful space, thoughtful therapist, and I left feeling genuinely rested.", rating: 5, featured: true, status: "Approved", date: futureDate(-9) },
      { id: "review-3", customer: "Aarav S.", service: "Premium Scalp Detox Ritual", therapist: "Ananya Mehta", quote: "The ritual was relaxing and my scalp felt wonderfully refreshed afterwards.", rating: 5, featured: true, status: "Approved", date: futureDate(-6) },
      ...Array.from({ length: 7 }, (_, i) => ({ id: `review-${i + 4}`, customer: `${people[i + 3]?.[0] ?? "Alba Guest"}`, service: initialServices[i % initialServices.length]?.name ?? "Head Spa", therapist: therapists[i % therapists.length] ?? "Maya Sharma", quote: "A warm welcome and a beautifully restful treatment. I will be back soon.", rating: i % 2 === 0 ? 5 : 4, featured: false, status: (i % 4 === 0 ? "Pending" : "Approved") as "Pending" | "Approved", date: futureDate(-i - 1) })),
    ],
    notifications: Array.from({ length: 30 }, (_, i) => ({ id: `notice-${i + 1}`, text: ["New booking received", "Appointment reminder due", "Payment received", "Cancellation received", "New customer registered", "Review submitted"][i % 6] ?? "New booking received", read: i > 5, time: `${futureDate(-Math.floor(i / 3))} · ${["10:12 AM", "11:40 AM", "2:05 PM", "4:18 PM", "6:02 PM"][i % 5]}` })),
    staff: [
      { id: "staff-1", name: "Maya Sharma", role: "Senior Wellness Therapist", specialty: "Korean Head Spa", rating: "4.9", photo: "portraitMaya", status: "Active", services: ["signature", "ritual-plus"], start: "10:00 AM", end: "8:00 PM", leave: [] },
      { id: "staff-2", name: "Ananya Mehta", role: "Head Spa Specialist", specialty: "Scalp Care", rating: "5.0", photo: "portraitAnanya", status: "Active", services: ["detox", "nourishment"], start: "10:00 AM", end: "6:30 PM", leave: [] },
      { id: "staff-3", name: "Sofia Patel", role: "Wellness Therapist", specialty: "Relaxation", rating: "4.9", photo: "portraitSofia", status: "Active", services: ["relaxation", "stress-relief"], start: "11:00 AM", end: "8:00 PM", leave: [futureDate(2)] },
      { id: "staff-4", name: "Diya Shah", role: "Wellness Therapist", specialty: "Nourishment", rating: "4.8", photo: "portraitDiya", status: "Active", services: ["nourishment", "signature"], start: "10:00 AM", end: "7:30 PM", leave: [] },
      { id: "staff-5", name: "Rhea Desai", role: "Guest Experience Lead", specialty: "Wellness", rating: "4.9", photo: "portraitRhea", status: "Active", services: ["couple", "express"], start: "12:30 PM", end: "8:00 PM", leave: [] },
    ],
    settings: { business: "ALBA WELLNESS", address: "Ahmedabad, Gujarat, India", phone: "+91 98765 21000", email: "hello@alba-wellness.com", whatsapp: "+91 98765 21000", hours: "Monday – Sunday · 10:00 AM – 8:00 PM", depositPercent: 30, taxPercent: 18, seoTitle: "ALBA WELLNESS | Korean Head Spa & Wellness", seoDescription: "Experience premium Korean-inspired head spa and wellness treatments at ALBA WELLNESS.", instagram: "https://instagram.com" },
    automations: [
      ["Booking Confirmation", true], ["Appointment Reminder", true], ["Reschedule Confirmation", true], ["Cancellation Confirmation", true], ["Invoice", true], ["Post Appointment Feedback", true], ["Birthday Message", false], ["Promotional Campaign", true],
    ].map(([name, enabled], index) => ({ id: `auto-${index + 1}`, name: String(name), enabled: Boolean(enabled), whatsapp: true, email: index !== 6 })),
    gallery: [
      { id: "gal-1", caption: "Signature scalp ritual", image: "treatment", published: true },
      { id: "gal-2", caption: "Private treatment room", image: "interior", published: true },
      { id: "gal-3", caption: "Warm water therapy", image: "water", published: true },
      { id: "gal-4", caption: "A quiet welcome", image: "reception", published: true },
      { id: "gal-5", caption: "Botanical oils", image: "oils", published: true },
      { id: "gal-6", caption: "Candlelit calm", image: "candles", published: true },
      { id: "gal-7", caption: "Warmed towels", image: "towels", published: true },
      { id: "gal-8", caption: "Shared sanctuary", image: "couple", published: true },
    ],
    faqs: [
      { id: "faq-1", question: "How early should I arrive?", answer: "Please arrive ten minutes early so you can settle in before your ritual begins.", published: true },
      { id: "faq-2", question: "Can I reschedule?", answer: "Yes. You can move your visit from your customer portal, or our reception team can help.", published: true },
      { id: "faq-3", question: "What should I bring?", answer: "Just yourself. We provide warmed towels, a private room and everything the ritual needs.", published: true },
    ],
    audit: [
      ["Super Admin", "Created a manual appointment", "Success"],
      ["Receptionist", "Changed booking status to Confirmed", "Success"],
      ["Maya Sharma", "Completed an appointment", "Success"],
      ["Accountant", "Generated invoice ALBA-INV-2026-2401", "Success"],
      ["Super Admin", "Updated Signature Korean Head Spa", "Success"],
      ["Receptionist", "Published First Visit Ritual", "Success"],
    ].map((entry, index) => ({ id: `audit-${index + 1}`, user: entry[0] ?? "Admin", action: entry[1] ?? "Updated the studio", date: futureDate(-index), time: ["09:14 AM", "11:02 AM", "01:40 PM", "03:18 PM", "05:05 PM", "06:44 PM"][index] ?? "10:00 AM", ip: `103.25.18.${20 + index}`, status: entry[2] ?? "Success" })),
    permissions: defaultPermissions(),
    lastBookingId: null,
    campaigns: [],
  };
}

export const permissionKeys: PermissionKey[] = ["Dashboard", "Appointments", "Customers", "Services", "Staff", "Invoices", "Payments", "Reports", "Marketing", "Content", "Settings"];

function grants(partial: Partial<Record<PermissionKey, boolean>>): Record<PermissionKey, boolean> {
  return Object.fromEntries(permissionKeys.map((key) => [key, partial[key] ?? false])) as Record<PermissionKey, boolean>;
}

export function defaultPermissions(): Record<AlbaRoleName, Record<PermissionKey, boolean>> {
  return {
    "Super Admin": grants(Object.fromEntries(permissionKeys.map((key) => [key, true]))),
    Receptionist: grants({ Dashboard: true, Appointments: true, Customers: true, Services: true, Invoices: true, Payments: true, Content: true }),
    Therapist: grants({ Dashboard: true, Appointments: true, Customers: true }),
    Accountant: grants({ Dashboard: true, Invoices: true, Payments: true, Reports: true }),
  };
}

export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
export function getService(store: AlbaDemoStore, id: string): AlbaService {
  const fallback = initialServices[0];
  if (!fallback) throw new Error("ALBA treatments are unavailable.");
  return store.services.find((service) => service.id === id) ?? store.services[0] ?? fallback;
}
export const prettyDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });