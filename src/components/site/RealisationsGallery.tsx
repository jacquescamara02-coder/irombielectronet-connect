import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { realisations } from "@/lib/company";

const INITIAL_COUNT = 6;

export function RealisationsGallery() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? realisations : realisations.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <Reveal
            key={item.caption}
            delay={(i % INITIAL_COUNT) * 70}
            className={i === 0 && !expanded ? "lg:col-span-2" : ""}
          >
            <figure className="card-lift group h-full overflow-hidden rounded-lg border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-56 w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
                  loading="lazy"
                  width={720}
                  height={420}
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-foreground">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="orbit-border inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
        >
          {expanded ? (
            <>
              Voir moins
              <ChevronUp className="size-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Voir plus de réalisations
              <ChevronDown className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      </Reveal>
    </div>
  );
}
