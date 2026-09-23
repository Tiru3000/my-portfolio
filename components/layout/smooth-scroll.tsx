"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { features } from "@/lib/config";

const LENIS_OPTIONS = {
  duration: 1.6,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical" as const,
  gestureOrientation: "vertical" as const,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
};

export function SmoothScroll({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  useEffect(() => {
    if (!features.smoothScroll) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis(LENIS_OPTIONS);

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    function handleAnchorClick(e: MouseEvent): void {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ensure it's a relative link or points to the current origin
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      // If it's navigating to a different page, let standard navigation happen
      if (url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const element = document.querySelector(url.hash);
        if (!element) return;

        e.preventDefault();
        e.stopPropagation();
        window.history.pushState(null, "", url.pathname + url.hash);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        lenis.scrollTo(element as HTMLElement, { offset: -100 });
      } else {
        // Same page, no hash (e.g., href="/") - scroll to top
        e.preventDefault();
        e.stopPropagation();
        window.history.pushState(null, "", url.pathname);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        lenis.scrollTo(document.documentElement, { offset: 0 });
      }
    }

    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
