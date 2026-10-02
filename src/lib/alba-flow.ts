import { getService, localIso, therapists, type AlbaAppointment, type AlbaDemoStore, type AlbaStaff } from "@/lib/alba-demo";

export const timeSlots = ["10:00 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM", "7:30 PM"];

export function clockToMinutes(label: string) {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 10 * 60;
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const meridiem = match[3]?.toUpperCase();
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export function collectedAmount(appointment: AlbaAppointment) {
  if (appointment.payment === "Refunded" || appointment.payment === "Failed" || appointment.payment === "Pending") return 0;
  if (appointment.payment === "Partial") return appointment.paidAmount ?? Math.round(appointment.amount * 0.3);
  return appointment.paidAmount ?? appointment.amount;
}

export function activeStaff(store: AlbaDemoStore) {
  return store.staff.filter((member) => member.status !== "Disabled");
}

function rangesOverlap(startA: number, durationA: number, startB: number, durationB: number) {
  return startA < startB + durationB && startB < startA + durationA;
}

export function therapistFree(store: AlbaDemoStore, member: AlbaStaff, date: string, time: string, duration: number, ignoreId?: string) {
  if (member.leave.includes(date)) return false;
  const start = clockToMinutes(time);
  const shiftStart = clockToMinutes(member.start);
  const shiftEnd = clockToMinutes(member.end);
  if (start < shiftStart || start + duration > shiftEnd) return false;
  return !store.appointments.some((appointment) => {
    if (appointment.id === ignoreId || appointment.status === "Cancelled" || appointment.status === "No Show") return false;
    if (appointment.therapist !== member.name || appointment.date !== date) return false;
    const bookedDuration = getService(store, appointment.serviceId)?.duration ?? 60;
    return rangesOverlap(start, duration, clockToMinutes(appointment.time), bookedDuration);
  });
}

export type SlotState = { slot: string; status: "Available" | "Almost full" | "Booked" };

export function slotStates(store: AlbaDemoStore, date: string, duration: number, therapistName: string, ignoreId?: string): SlotState[] {
  const today = localIso(0);
  const roster = activeStaff(store).filter((member) => therapistName === "Any Available Therapist" || member.name === therapistName);
  return timeSlots.map((slot) => {
    if (date < today) return { slot, status: "Booked" };
    const free = roster.filter((member) => therapistFree(store, member, date, slot, duration, ignoreId));
    if (free.length === 0) return { slot, status: "Booked" };
    if (therapistName === "Any Available Therapist" && free.length === 1 && roster.length > 1) return { slot, status: "Almost full" };
    return { slot, status: "Available" };
  });
}

export function assignTherapist(store: AlbaDemoStore, date: string, time: string, duration: number, requested: string) {
  if (requested !== "Any Available Therapist") return requested;
  const free = activeStaff(store).find((member) => therapistFree(store, member, date, time, duration));
  return free?.name ?? therapists[0] ?? "Maya Sharma";
}

export function invoiceBreakdown(amount: number, taxPercent: number) {
  const tax = Math.round((amount * taxPercent) / (100 + taxPercent));
  const subtotal = amount - tax;
  return { subtotal, discount: 0, tax, total: amount };
}

export function downloadText(filename: string, body: string, type = "text/plain") {
  const blob = new Blob([body], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function calendarIcs(appointment: AlbaAppointment, serviceName: string) {
  const start = clockToMinutes(appointment.time);
  const hours = String(Math.floor(start / 60)).padStart(2, "0");
  const minutes = String(start % 60).padStart(2, "0");
  return `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:ALBA WELLNESS · ${serviceName}\nDTSTART:${appointment.date.replaceAll("-", "")}T${hours}${minutes}00\nDESCRIPTION:${appointment.reference}\nEND:VEVENT\nEND:VCALENDAR`;
}
