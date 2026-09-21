import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description: `My projects. ${siteConfig.description}`,
  path: "/work",
});

export default function WorkPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 pt-32 sm:gap-28 sm:pt-44">
      <Projects withHeadline />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
