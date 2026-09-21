import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";


export function Hero(): ReactNode {
  return (
    <section className="relative w-full text-center">
      <div className="mx-auto w-full max-w-4xl px-6 pt-32 sm:px-10 sm:pt-40">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <FadeIn className="flex flex-col items-center gap-4">
            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[4rem]">
              <span className="block whitespace-nowrap">
                Building iconic brands
              </span>
              <span className="block whitespace-nowrap">for ambitious founders</span>
            </h1>

            <p className="text-[18px] leading-[1.4] tracking-tight text-foreground/60 max-w-lg mx-auto">
              Simple, minimal identities built with clear intention.
            </p>

            <div className="mt-2 flex justify-center w-full">
              <HeroCtas />
            </div>
          </FadeIn>

          <ScaleUnblur className="flex justify-center w-full">
            <div className="relative aspect-[4/3] w-full md:max-w-3xl lg:max-w-4xl overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-foreground/5">
                <video
                  src="/animo.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
