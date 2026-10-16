"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Conteúdo SSR sempre visível; movimento é uma melhoria progressiva. */
export function MotionRoot({
  children,
  motionKey,
  id,
  className,
}: {
  children: ReactNode;
  motionKey: string;
  id?: string;
  className?: string;
}) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!root.current || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      root.current.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const seen = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      if (preference.matches) {
        targets.forEach((target) => target.classList.remove("is-revealed"));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const target = entry.target as HTMLElement;
            target.classList.add("is-revealed");
            seen.add(target);
            observer?.unobserve(target);
          }
        },
        { threshold: 0.08 },
      );
      for (const target of targets) {
        const bounds = target.getBoundingClientRect();
        // Não reapresentar conteúdo já visível, inclusive após trocar idioma.
        if (bounds.top < window.innerHeight || seen.has(target)) {
          seen.add(target);
          continue;
        }
        observer.observe(target);
      }
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
    };
  }, [motionKey]);
  return (
    <main ref={root} id={id} className={className}>
      {children}
    </main>
  );
}
