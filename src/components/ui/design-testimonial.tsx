"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Une installation de vidéosurveillance impeccable, livrée dans les délais et sans interruption de nos activités.",
    author: "Jean-Marc Nguema",
    role: "Directeur des opérations",
    company: "Logistics PG",
  },
  {
    quote:
      "Le brassage de notre baie informatique a transformé la fiabilité de notre réseau. Un travail d'une grande rigueur.",
    author: "Sarah Moussavou",
    role: "Responsable informatique",
    company: "Groupe Ogooué",
  },
  {
    quote:
      "Des liaisons VHF et VoIP stables sur tous nos sites. Une équipe technique disponible et très professionnelle.",
    author: "Patrick Obiang",
    role: "Chef de site",
    company: "Port-Gentil Marine",
  },
];

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const current = testimonials[activeIndex];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-10 lg:py-16"
    >
      {/* Oversized index number - bleeds off the left edge */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { x: numberX, y: numberY }}
        className="pointer-events-none absolute top-1/2 -left-6 hidden -translate-y-1/2 select-none lg:block"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block font-display text-[12rem] leading-none font-semibold text-primary/10"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Main content - asymmetric layout */}
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        {/* Left column - vertical label + progress */}
        <div className="hidden flex-col items-center gap-6 lg:col-span-2 lg:flex">
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase [writing-mode:vertical-rl]">
            Témoignages
          </span>
          <div className="relative h-32 w-px overflow-hidden bg-border">
            <motion.span
              key={activeIndex}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 origin-top bg-accent"
            />
          </div>
        </div>

        {/* Center - main content */}
        <div className="lg:col-span-10">
          <div className="flex flex-col gap-8">
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`company-${activeIndex}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-accent uppercase"
              >
                <Quote className="size-3.5" aria-hidden="true" />
                {current.company}
              </motion.span>
            </AnimatePresence>

            {/* Quote with word reveal */}
            <blockquote className="min-h-32">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`quote-${activeIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="max-w-3xl text-2xl/9 font-medium text-foreground sm:text-3xl/11"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={`${activeIndex}-${i}`}
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: reduceMotion ? 0 : i * 0.035,
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: { opacity: 0, transition: { duration: 0.15 } },
                      }}
                      className="inline-block"
                    >
                      {word}
                      {"\u00A0"}
                    </motion.span>
                  ))}
                </motion.p>
              </AnimatePresence>
            </blockquote>

            {/* Author row + navigation */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${activeIndex}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="h-px w-10 origin-left bg-accent"
                  />
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {current.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {current.role} · {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Avis précédent"
                  className="orbit-border inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Avis suivant"
                  className="orbit-border inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker - repeating company names */}
      <div
        className="pointer-events-none mt-14 overflow-hidden border-t border-border/60 pt-6"
        aria-hidden="true"
      >
        <motion.div
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex w-max gap-8 whitespace-nowrap text-xs font-semibold tracking-[0.28em] text-muted-foreground/50 uppercase"
        >
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              {testimonials.map((t) => t.company).join("  •  ")}
              {"  •  "}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
