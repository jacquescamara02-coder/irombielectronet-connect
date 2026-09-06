import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export function ContextualSectionBack({ sectionId }: { sectionId: string }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const update = () => setIsActive(window.location.hash === `#${sectionId}`);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [sectionId]);

  if (!isActive) return null;

  return (
    <button
      type="button"
      onClick={() => {
        window.history.replaceState(null, "", window.location.pathname);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsActive(false);
      }}
      className="orbit-border group mb-8 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      aria-label="Retourner à l’accueil"
    >
      <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      Retour à l’accueil
    </button>
  );
}