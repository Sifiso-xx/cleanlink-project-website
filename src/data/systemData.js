import { ShieldCheck, Gauge, SprayCan, Handshake, Check } from "lucide-react";

/**
 * System functionalities and features
 */

export const functionalities = [
  { 
    title: "Client & Service Management", 
    text: "Discover the company, register, request a service, receive a quotation, and manage bookings — with service history kept for reviews and rebooking." 
  },
  { 
    title: "Workforce & Training Management", 
    text: "Cleaner profiles, skills, certifications, availability and training programmes, with skills updated automatically once training is completed." 
  },
  { 
    title: "Job & Equipment Management", 
    text: "From accepted request to invoice: cleaners and equipment are assigned, and equipment condition is checked before and after each job." 
  },
  { 
    title: "Tender & Business Administration", 
    text: "Tender opportunities, requirements, documents, submissions and outcomes recorded centrally, so past results inform future applications." 
  },
];

export const futureScope = [
  "A public marketplace beyond one company", 
  "E-signatures on contracts and tenders", 
  "In-app chat, maps and advertising", 
  "Direct card and EFT payment gateway"
];

export const roles = [
  { 
    code: "SO", 
    label: "SYSTEM OWNER", 
    title: "Sees the whole business.", 
    icon: ShieldCheck, 
    accent: "#b88ad8", 
    points: [
      "Oversee tenders and outcomes company-wide", 
      "Manage manager accounts and permissions", 
      "Review activity logs and business reports"
    ] 
  },
  { 
    code: "MG", 
    label: "MANAGER", 
    title: "Turns requests into a plan.", 
    icon: Gauge, 
    accent: "#68c8ee", 
    points: [
      "Convert tenders and requests into confirmed jobs", 
      "Check cleaner skills, training and availability", 
      "Assign equipment and track job progress"
    ] 
  },
  { 
    code: "CL", 
    label: "CLEANER", 
    title: "Knows the job, does it well.", 
    icon: SprayCan, 
    accent: "#75d49a", 
    points: [
      "Track training progress and current skills", 
      "Receive a clear job card with site and time", 
      "Check equipment and mark jobs complete"
    ] 
  },
  { 
    code: "CT", 
    label: "CLIENT", 
    title: "Books without a phone call.", 
    icon: Handshake, 
    accent: "#f6ca4b", 
    points: [
      "Request a service and receive a quotation", 
      "Book, track and pay for a cleaning job", 
      "Leave a review and rebook a trusted crew"
    ] 
  },
];
