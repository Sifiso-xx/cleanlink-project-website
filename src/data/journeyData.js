import { 
  Handshake, 
  UsersRound, 
  ClipboardCheck, 
  FileCheck2, 
  CalendarCheck2, 
  SprayCan 
} from "lucide-react";

/**
 * Client journey data
 * The scroll journey follows a private client through Core Functionality 1 —
 * Client & Service Management — from first contact to a repeat booking.
 */

export const clientJourney = [
  { 
    step: "01", 
    title: "Find the company", 
    short: "Discover", 
    text: "A private client finds Mcusi Omhlophe Holdings online instead of needing a referral or a tender notice.", 
    detail: "New visitor · Ebuhleni Estate", 
    icon: Handshake, 
    accent: "#f6ca4b" 
  },
  { 
    step: "02", 
    title: "Create an account", 
    short: "Register", 
    text: "A short profile with contact details and the service address, ready to reuse for future bookings.", 
    detail: "Profile saved · 3-bed home", 
    icon: UsersRound, 
    accent: "#68c8ee" 
  },
  { 
    step: "03", 
    title: "Request a service", 
    short: "Request", 
    text: "The client describes the job — type of clean, size of space, preferred dates.", 
    detail: "Deep clean requested", 
    icon: ClipboardCheck, 
    accent: "#ef7966" 
  },
  { 
    step: "04", 
    title: "Receive a quotation", 
    short: "Quote", 
    text: "CleanLink generates a quotation from the request, ready to accept or query.", 
    detail: "Quotation CL-Q0142", 
    icon: FileCheck2, 
    accent: "#b88ad8" 
  },
  { 
    step: "05", 
    title: "Book and schedule", 
    short: "Book", 
    text: "An accepted quote becomes a booking, checked against crew availability before it's confirmed.", 
    detail: "Tuesday · 08:30 · Bethal", 
    icon: CalendarCheck2, 
    accent: "#75d49a" 
  },
  { 
    step: "06", 
    title: "Complete, review, rebook", 
    short: "Rebook", 
    text: "The client sees the job marked complete, leaves a review, and can rebook the same crew.", 
    detail: "Job closed · reviewed", 
    icon: SprayCan, 
    accent: "#ff9f43" 
  },
];
