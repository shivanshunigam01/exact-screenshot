import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { createInitialStore, type AlbaAppointment, type AlbaDemoStore } from "@/lib/alba-demo";

type AlbaContextValue = {
  store: AlbaDemoStore;
  updateStore: (updater: (current: AlbaDemoStore) => AlbaDemoStore) => void;
  addBooking: (booking: Omit<AlbaAppointment, "id" | "reference" | "status" | "payment">) => AlbaAppointment;
  resetDemo: () => void;
  role: string;
  setRole: (role: string) => void;
};

const AlbaContext = createContext<AlbaContextValue | null>(null);
const STORAGE_KEY = "alba-wellness-demo-v1";

export function AlbaDemoProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<AlbaDemoStore>(() => createInitialStore());
  const [role, setRoleState] = useState("Guest");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setStore(JSON.parse(saved) as AlbaDemoStore);
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
        status: "Confirmed",
        payment: booking.amount > 0 ? "Paid" : "Pending",
      };
      setStore((current) => ({
        ...current,
        appointments: [newBooking, ...current.appointments],
        notifications: [{ id: `notice-${Date.now()}`, text: `New booking received · ${newBooking.customer}`, read: false }, ...current.notifications],
      }));
      return newBooking;
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