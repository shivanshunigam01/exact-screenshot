import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { createInitialStore, defaultPermissions, type AlbaAppointment, type AlbaDemoStore } from "@/lib/alba-demo";

type AlbaContextValue = {
  store: AlbaDemoStore;
  updateStore: (updater: (current: AlbaDemoStore) => AlbaDemoStore) => void;
  addBooking: (booking: Omit<AlbaAppointment, "id" | "reference" | "status" | "invoiceNumber"> & { status?: AlbaAppointment["status"] }) => AlbaAppointment;
  log: (action: string) => void;
  resetDemo: () => void;
  role: string;
  setRole: (role: string) => void;
};

const AlbaContext = createContext<AlbaContextValue | null>(null);
const STORAGE_KEY = "alba-wellness-demo-v2";

function mergeStore(raw: Partial<AlbaDemoStore> | null): AlbaDemoStore {
  const base = createInitialStore();
  if (!raw) return base;
  return {
    ...base,
    ...raw,
    profile: { ...base.profile, ...raw.profile },
    settings: { ...base.settings, ...raw.settings },
    services: raw.services?.length ? raw.services : base.services,
    appointments: raw.appointments?.length ? raw.appointments : base.appointments,
    offers: raw.offers?.length ? raw.offers : base.offers,
    reviews: raw.reviews?.length ? raw.reviews : base.reviews,
    staff: raw.staff?.length ? raw.staff : base.staff,
    notifications: raw.notifications?.length ? raw.notifications : base.notifications,
    automations: raw.automations?.length ? raw.automations : base.automations,
    gallery: raw.gallery?.length ? raw.gallery : base.gallery,
    faqs: raw.faqs?.length ? raw.faqs : base.faqs,
    audit: raw.audit ?? base.audit,
    permissions: raw.permissions ?? defaultPermissions(),
    campaigns: raw.campaigns ?? [],
    lastBookingId: raw.lastBookingId ?? null,
  };
}

export function AlbaDemoProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<AlbaDemoStore>(() => createInitialStore());
  const [role, setRoleState] = useState("Guest");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setStore(mergeStore(JSON.parse(saved) as Partial<AlbaDemoStore>));
    } catch {
      toast.error("Saved demo data could not be opened. Starting fresh.");
    }
    setRoleState(window.localStorage.getItem(`${STORAGE_KEY}-role`) ?? "Guest");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [hydrated, store]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(`${STORAGE_KEY}-role`, role);
  }, [hydrated, role]);

  const value = useMemo<AlbaContextValue>(() => ({
    store,
    updateStore: (updater) => setStore((current) => updater(current)),
    addBooking: (booking) => {
      const newBooking: AlbaAppointment = {
        ...booking,
        id: `appt-${Date.now()}`,
        reference: `ALBA-2026-${Math.floor(10000 + Math.random() * 89999)}`,
        invoiceNumber: `ALBA-INV-2026-${Math.floor(3000 + Math.random() * 6000)}`,
        status: booking.status ?? "Confirmed",
      };
      if (booking.payment !== "Pending" && booking.payment !== "Failed") newBooking.txnId = booking.txnId ?? `TXN-ALBA-${Math.floor(100000 + Math.random() * 899999)}`;
      setStore((current) => ({
        ...current,
        lastBookingId: newBooking.id,
        appointments: [newBooking, ...current.appointments],
        notifications: [
          { id: `notice-${Date.now()}`, text: `New booking received · ${newBooking.customer}`, read: false, time: "Just now" },
          { id: `notice-pay-${Date.now()}`, text: newBooking.payment === "Paid" ? "Payment received" : newBooking.payment === "Partial" ? "Deposit received" : "Payment pending at the spa", read: false, time: "Just now" },
          ...current.notifications,
        ],
        audit: [{ id: `audit-${Date.now()}`, user: role === "Guest" ? "Guest" : role, action: `Reserved ${newBooking.reference} for ${newBooking.customer}`, date: newBooking.date, time: newBooking.time, ip: "103.25.18.44", status: "Success" }, ...current.audit],
      }));
      return newBooking;
    },
    log: (action) => {
      const now = new Date();
      setStore((current) => ({
        ...current,
        audit: [{ id: `audit-${Date.now()}`, user: role === "Guest" ? "Super Admin" : role, action, date: now.toISOString().slice(0, 10), time: now.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" }), ip: "103.25.18.44", status: "Success" }, ...current.audit],
      }));
    },
    resetDemo: () => {
      setStore(createInitialStore());
      setRoleState("Guest");
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(`${STORAGE_KEY}-role`);
      toast.success("Demo data restored to its starting point.");
    },
    role,
    setRole: (nextRole) => setRoleState(nextRole),
  }), [hydrated, role, store]);

  return <AlbaContext.Provider value={value}>{children}</AlbaContext.Provider>;
}

export function useAlbaDemo() {
  const context = useContext(AlbaContext);
  if (!context) throw new Error("useAlbaDemo must be used inside AlbaDemoProvider");
  return context;
}