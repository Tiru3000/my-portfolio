"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactButton(): ReactNode {
  return (
    <motion.a
      href="https://cal.com/tirupati-jani-f7oyty/15min"
      target="_blank"
      rel="noopener noreferrer"
      layout
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center border border-transparent bg-foreground px-5 text-sm font-medium text-background transition-all active:scale-95 hover:bg-foreground/90"
    >
      <span className="relative inline-flex items-center gap-2 whitespace-nowrap">
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Book an Appointment</span>
      </span>
    </motion.a>
  );
}
