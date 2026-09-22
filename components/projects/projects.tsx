import {
  Bot,
  Compass,
  Layers,
  LineChart,
  Sparkles,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "sigmametrics",
    url: "https://www.behance.net/gallery/254785595/Sigma-Metrics-brand-identity-design",
    icon: Sparkles,
    iconLabel: "Sigma Metrics",
    title:
      "Sigma Metrics - Advanced Analytics",
    description:
      "An advanced analytics platform that helps businesses understand their data and make informed decisions through real-time dashboards.",
    meta: "Design Engineer, 2024",
    imageRatio: 1024 / 768,
    image: "/sigmametrics.png",
    imageAlt: "Sigma Metrics project mockup",
  },
  {
    id: "palladium",
    url: "https://www.behance.net/gallery/254384485/Palladium",
    icon: Compass,
    iconLabel: "Palladium",
    title: "Palladium - WealthTech",
    description:
      "Brand identity for a high-end wealth management platform built for family offices and ultra-high-net-worth clients.",
    meta: "Product & Brand Designer, 2025",
    imageRatio: 1024 / 768,
    image: "/palladium.jpeg",
    imageAlt: "Palladium brand and product sprint mockup",
  },
  {
    id: "fellix",
    url: "https://www.behance.net/gallery/254560449/fellix-logo-design",
    icon: Sparkles,
    iconLabel: "Fellix",
    title: "Fellix - Autonomous Robotics & Logistics",
    description:
      "An autonomous drone logistics company developing intelligent flight systems for cargo delivery, fleet routing, and real-time collision avoidance.",
    meta: "Design, 2025",
    imageRatio: 1024 / 768,
    image: "/fellix.png",
    imageAlt: "Fellix project mockup",
  },

  {
    id: "quantify",
    url: "https://www.behance.net/gallery/254679973/Quantify-logo-design",
    icon: LineChart,
    iconLabel: "Quantify",
    title:
      "Quantify - Data Visualization",
    description:
      "A comprehensive data visualization tool that transforms complex datasets into intuitive and interactive charts and graphs.",
    meta: "Lead Designer, 2023",
    imageRatio: 1024 / 768,
    image: "/quantify.png",
    imageAlt: "Quantify project mockup",
  },
  {
    id: "holodesk",
    url: "https://www.behance.net/gallery/254966985/Holodesk-Brand-identity",
    icon: Layers,
    iconLabel: "Holodesk",
    title:
      "Holodesk - Spatial Computing",
    description:
      "An innovative spatial computing interface for design teams, bringing 3D models and augmented reality into the collaborative workspace.",
    meta: "Design Engineer, 2024",
    imageRatio: 1024 / 768,
    image: "/holodesk.png",
    imageAlt: "Holodesk project mockup",
  },
  {
    id: "seven",
    url: "https://www.behance.net/gallery/254347857/Seven",
    icon: Bot,
    iconLabel: "Seven",
    title: "Seven - Predictive Trading",
    description:
      "Brand identity for a machine-learning powered trading platform built for systematic traders and independent quants.",
    meta: "Independent Project, 2025",
    imageRatio: 1024 / 768,
    image: "/seven.png",
    imageAlt: "Seven friendlier AI chat interface mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
};

export function Projects({
  withHeadline = false,
}: ProjectsProps): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-4 mb-10 text-center sm:mb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[42ch] text-[16px] leading-[1.5] tracking-tight text-foreground/60 sm:text-[17px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="group/card block h-full"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block focus:outline-none h-full">
        <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-white dark:bg-background p-3 sm:p-3.5 transition-colors hover:bg-foreground/5 h-full">

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 aspect-[4/3]"
          >
            <div className="project-card__image-inner h-full w-full">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                priority={index < 2}
                quality={100}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1 flex-1">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
              {project.title}
            </h3>
            <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
              {project.description}
            </p>
          </div>
        </article>
      </a>
    </FadeIn>
  );
}
