"use client";

import { Mail, Dribbble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const formData = new FormData(form);
    
    // Replace this with your access key
    formData.append("access_key", "fa5e4cf4-2730-408c-89bf-bf7110c98a21");

    try {
      const url = ["https://api", ".web3", "forms.com/submit"].join("");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });
      await response.json();
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <section id="contact" className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn>
          <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-white dark:bg-background p-1.5 shadow-sm">
            <div className="relative w-full overflow-hidden rounded-[1.6rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
                style={{
                  WebkitMaskImage: CARD_FADE_MASK,
                  maskImage: CARD_FADE_MASK,
                }}
              >
                <ShaderFlow scale={3} brightness={3}/>
              </div>

              <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-2 md:items-stretch md:gap-6 md:p-6">
                <div className="flex flex-col gap-3 md:justify-center md:pl-6 lg:pl-10">
                  <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                    Let&rsquo;s connect
                  </h2>
                  <p className="max-w-[29ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px] mb-2">
                    I&rsquo;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your visions. Just reach out!
                  </p>
                  <ContactCardCtas />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-foreground/5 p-6 sm:p-8">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                      <input id="name" name="name" type="text" className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                      <input id="email" name="email" type="email" className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                      <textarea id="message" name="message" rows={4} className="w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20" required />
                    </div>
                    <button type="submit" disabled={status === "submitting"} className="mt-2 w-full rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-ring disabled:opacity-70 disabled:cursor-not-allowed">
                      {status === "submitting" ? "Sending..." : status === "success" ? "Message sent!" : status === "error" ? "Error, try again" : "Send message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <div className="border-foreground/8 flex flex-col items-center justify-center rounded-3xl border bg-background p-6 sm:p-8">
          <div className="flex items-center gap-6 opacity-75">
            <SocialIcon
              href="mailto:zoddesigner1902@gmail.com"
              label="Email"
              lucideIcon={Mail}
            />
            <SocialIcon
              href="https://www.linkedin.com"
              label="LinkedIn"
              imageSrc="/linkedin.svg"
            />
            <SocialIcon
              href="https://x.com"
              label="X"
              imageSrc="/x.svg"
            />
            <SocialIcon
              href="https://dribbble.com"
              label="Dribbble"
              lucideIcon={Dribbble}
            />
            <SocialIcon
              href="https://www.behance.net/skystrojane"
              label="Behance"
              imageSrc="/behance.svg"
            />
          </div>
          <div className="mt-8 flex flex-col items-center gap-1 text-center">
            <p className="text-[13px] tracking-tight text-foreground/70">
              © 2026 Zoddesigner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-colors hover:text-foreground"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain dark:invert"
        />
      ) : null}
    </Link>
  );
}
