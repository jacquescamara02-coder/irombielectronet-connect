"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextBlockAnimationProps {
  children: ReactNode;
  className?: string;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}

export function TextBlockAnimation({
  children,
  className,
  animateOnScroll = true,
  delay = 0,
  blockColor = "var(--color-signal)",
  stagger = 0.08,
  duration = 0.55,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Respect prefers-reduced-motion : texte visible directement
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(container, { opacity: 1 });
        return;
      }

      const split = new SplitText(container, {
        type: "lines",
        linesClass: "block-line-parent",
      });

      const lines = split.lines as HTMLElement[];
      const blocks: HTMLDivElement[] = [];

      lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "block";
        wrapper.style.overflow = "hidden";

        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.inset = "0";
        block.style.backgroundColor = blockColor;
        block.style.zIndex = "2";
        block.style.transform = "scaleX(0)";
        block.style.transformOrigin = "left center";
        block.setAttribute("aria-hidden", "true");

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        wrapper.appendChild(block);

        gsap.set(line, { opacity: 0 });
        blocks.push(block);
      });

      const tlVars: gsap.TimelineVars = {
        defaults: { ease: "expo.inOut" },
        delay,
      };
      if (animateOnScroll) {
        tlVars.scrollTrigger = {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse",
        };
      }
      const tl = gsap.timeline(tlVars);

      tl.to(blocks, {
        scaleX: 1,
        duration,
        stagger,
        transformOrigin: "left center",
      })
        .set(lines, { opacity: 1, stagger }, `<${duration / 2}`)
        .to(
          blocks,
          {
            scaleX: 0,
            duration,
            stagger,
            transformOrigin: "right center",
          },
          `<${duration * 0.4}`,
        );

      return () => {
        tl.kill();
        split.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    },
  );

  return (
    <div ref={containerRef} className={cn("text-block-animation", className)}>
      {children}
    </div>
  );
}
