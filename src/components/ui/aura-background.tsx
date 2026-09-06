import { useId } from "react";

export function AuraBackground() {
  const filterId = `carbon-blue-grain-${useId().replace(/:/g, "")}`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="aura-layer-1 absolute inset-0" />
      <div className="aura-layer-2 absolute inset-0" />
      <div className="aura-grain absolute inset-0">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves={4}
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0"
            />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${filterId})`} />
        </svg>
      </div>
    </div>
  );
}