import { motion, useReducedMotion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const reduce = useReducedMotion();
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    opacity: 0.12 + i * 0.025,
  }));

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <title>Tracés animés décoratifs</title>
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          initial={reduce ? false : { pathLength: 0.3, opacity: 0.4 }}
          {...(!reduce && {
            animate: {
              pathLength: 1,
              opacity: [0.3, 0.65, 0.3],
              pathOffset: [0, 1, 2],
            },
            transition: {
              duration: 20 + (path.id % 10) * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear" as const,
            },
          })}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden text-[var(--color-signal)] ${className}`}
      aria-hidden="true"
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
