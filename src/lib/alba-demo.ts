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
};

export type AlbaDemoStore = {
  services: AlbaService[];
  appointments: AlbaAppointment[];
  profile: { name: string; phone: string; email: string; dob: string; address: string };
  offers: { id: string; name: string; code: string; discount: string; active: boolean }[];
  reviews: { id: string; customer: string; service: string; quote: string; rating: number; featured: boolean }[];
  notifications: { id: string; text: string; read: boolean }[];
  staff: { id: string; name: string; role: string; specialty: string; rating: string }[];
};

export const therapists = ["Maya Sharma", "Ananya Mehta", "Sofia Patel", "Diya Shah", "Rhea Desai"];

export const initialServices: AlbaService[] = [
  { id: "signature", name: "Signature Korean Head Spa", category: "Head Spa", duration: 60, price: 2499, description: "A complete scalp reset with a clarifying cleanse, warm water therapy and an unhurried head massage.", image: "treatment", benefits: ["Scalp clarity", "Deep relaxation", "Healthy-looking shine"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "detox", name: "Premium Scalp Detox Ritual", category: "Scalp Care", duration: 75, price: 3199, description: "A thoughtful deep-cleanse ritual that refreshes the scalp and restores a feeling of lightness.", image: "ritual", benefits: ["Clarifies buildup", "Balances the scalp", "Restores freshness"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Hair Nourishment", price: 699 }], active: true },
  { id: "relaxation", name: "Deep Relaxation Ritual", category: "Relaxation", duration: 45, price: 1999, description: "Slow, soothing pressure and warm towels invite your mind to settle and your shoulders to soften.", image: "interior", benefits: ["Eases tension", "Encourages rest", "A quiet reset"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "nourishment", name: "Hair & Scalp Nourishment", category: "Scalp Care", duration: 60, price: 2799, description: "A nourishing treatment with botanical oils and a restorative scalp massage.", image: "treatment", benefits: ["Softens dry lengths", "Nourishes the scalp", "Adds a healthy finish"], addOns: [{ name: "Scalp Serum Ritual", price: 499 }, { name: "Hair Nourishment", price: 699 }], active: true },
  { id: "stress-relief", name: "Stress Relief Head Massage", category: "Wellness", duration: 45, price: 1799, description: "A focused, grounding head massage to ease the weight of a busy day.", image: "ritual", benefits: ["Releases tension", "Grounding touch", "Restful pause"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Extended Massage", price: 599 }], active: true },
  { id: "couple", name: "Couple Wellness Ritual", category: "Packages", duration: 75, price: 4999, description: "A shared sanctuary for two, with side-by-side head spa treatments and time to reconnect.", image: "interior", benefits: ["Shared experience", "Two therapists", "Special package value"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }], active: true },
  { id: "express", name: "Midweek Scalp Refresh", category: "Head Spa", duration: 30, price: 1299, description: "A considered refresh for the days you need a small moment of calm.", image: "interior", benefits: ["Quick reset", "Gentle cleanse", "Easy to fit in"], addOns: [{ name: "Aromatherapy", price: 399 }], active: true },
  { id: "ritual-plus", name: "The Alba Signature Journey", category: "Packages", duration: 90, price: 3999, description: "Our most immersive ritual, bringing together scalp care, nourishing oils and a longer massage.", image: "ritual", benefits: ["Full ritual experience", "Extended massage", "Personalised finish"], addOns: [{ name: "Aromatherapy", price: 399 }, { name: "Scalp Serum Ritual", price: 499 }], active: true },
];

const people = [
  ["Aarav Shah", "98765 10001"], ["Meera Patel", "98765 10002"], ["Rohan Desai", "98765 10003"], ["Isha Mehta", "98765 10004"], ["Kabir Joshi", "98765 10005"],
  ["Anaya Trivedi", "98765 10006"], ["Vivaan Gandhi", "98765 10007"], ["Kiara Bhatt", "98765 10008"], ["Arjun Shah", "98765 10009"], ["Diya Patel", "98765 10010"],
  ["Reyansh Mehta", "98765 10011"], ["Aditi Desai", "98765 10012"], ["Advait Shah", "98765 10013"], ["Saanvi Joshi", "98765 10014"], ["Ishaan Patel", "98765 10015"],
  ["Myra Shah", "98765 10016"], ["Dhruv Mehta", "98765 10017"], ["Navya Desai", "98765 10018"], ["Veer Trivedi", "98765 10019"], ["Aanya Bhatt", "98765 10020"],
];

const today = new Date();
const futureDate = (offset: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
};

export function createInitialStore(): AlbaDemoStore {
  const appointments = Array.from({ length: 30 }, (_, index) => {
    const person = people[index % people.length] ?? ["Alba Guest", "98765 00000"];
    const service = initialServices[index % initialServices.length] ?? initialServices[0];
    const status: AlbaAppointment["status"] = index % 9 === 0 ? "Completed" : index % 13 === 0 ? "Pending" : "Confirmed";
    return {
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
      payment: index % 7 === 0 ? "Pending" : index % 8 === 0 ? "Partial" : "Paid",
    };
  });

  return {
    services: initialServices,
    appointments,
    profile: { name: "Meera Patel", phone: "+91 98765 10002", email: "meera.patel@mail.demo", dob: "1995-06-14", address: "Ahmedabad, Gujarat" },
    offers: [
      { id: "offer-1", name: "First Visit Ritual", code: "FIRSTVISIT20", discount: "20% OFF", active: true },
      { id: "offer-2", name: "Couple Wellness", code: "COUPLEALBA", discount: "₹500 OFF", active: true },
      { id: "offer-3", name: "Midweek Reset", code: "RESET15", discount: "15% OFF", active: true },
      { id: "offer-4", name: "Scalp Care Edit", code: "SCALP10", discount: "10% OFF", active: true },
      { id: "offer-5", name: "Returning Guest", code: "ALBAREPEAT", discount: "₹300 OFF", active: false },
    ],
    reviews: [
      { id: "review-1", customer: "Meera P.", service: "Signature Korean Head Spa", quote: "A full hour of calm. The little details made the whole experience feel so considered.", rating: 5, featured: true },
      { id: "review-2", customer: "Isha M.", service: "Deep Relaxation Ritual", quote: "Beautiful space, thoughtful therapist, and I left feeling genuinely rested.", rating: 5, featured: true },
      { id: "review-3", customer: "Aarav S.", service: "Premium Scalp Detox Ritual", quote: "The ritual was relaxing and my scalp felt wonderfully refreshed afterwards.", rating: 5, featured: true },
      ...Array.from({ length: 7 }, (_, i) => ({ id: `review-${i + 4}`, customer: `${people[i + 3]?.[0] ?? "Alba Guest"}`, service: initialServices[i % initialServices.length]?.name ?? "Head Spa", quote: "A warm welcome and a beautifully restful treatment. I will be back soon.", rating: i % 2 === 0 ? 5 : 4, featured: false })),
    ],
    notifications: Array.from({ length: 30 }, (_, i) => ({ id: `notice-${i + 1}`, text: ["New booking received", "Appointment reminder due", "Payment received", "Cancellation received", "New customer registered", "Review submitted"][i % 6] ?? "New booking received", read: i > 5 })),
    staff: [
      { id: "staff-1", name: "Maya Sharma", role: "Senior Wellness Therapist", specialty: "Korean Head Spa", rating: "4.9" },
      { id: "staff-2", name: "Ananya Mehta", role: "Head Spa Specialist", specialty: "Scalp Care", rating: "5.0" },
      { id: "staff-3", name: "Sofia Patel", role: "Wellness Therapist", specialty: "Relaxation", rating: "4.9" },
      { id: "staff-4", name: "Diya Shah", role: "Wellness Therapist", specialty: "Nourishment", rating: "4.8" },
      { id: "staff-5", name: "Rhea Desai", role: "Guest Experience Lead", specialty: "Wellness", rating: "4.9" },
    ],
  };
}

export const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
export const getService = (store: AlbaDemoStore, id: string) => store.services.find((service) => service.id === id) ?? store.services[0] ?? initialServices[0];
export const prettyDate = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });