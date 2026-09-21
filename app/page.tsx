import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-12 sm:gap-20">
      <div className="flex flex-col gap-8 sm:gap-12">
        <Hero />
        <section className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-10">
          <FadeIn delay={0.5} className="w-full flex justify-center">
            <div className="mx-auto w-full md:max-w-3xl lg:max-w-4xl rounded-4xl border border-foreground/10 bg-foreground/5 backdrop-blur-md p-6 sm:p-8 dark:bg-foreground/10 flex flex-col items-center text-center shadow-sm">
              <p className="text-[15px] leading-[1.7] tracking-tight text-foreground/80 sm:text-[16px] max-w-2xl">
                Hii, I&rsquo;m <span className="text-foreground font-semibold">Tirupati</span>. I design <span className="text-foreground font-semibold">strategic logos</span> and <span className="text-foreground font-semibold">brand identities</span> that help <span className="text-foreground font-semibold">startups</span> build <span className="text-foreground font-semibold">trust</span>, stand out, and leave a <span className="text-foreground font-semibold">lasting</span> impression.
              </p>
            </div>
          </FadeIn>
        </section>
      </div>
      <Projects withHeadline />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
