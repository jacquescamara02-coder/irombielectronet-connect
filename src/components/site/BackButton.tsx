import { ArrowUpLeft } from "lucide-react";

/**
 * Bouton "Retour" présent dans chaque section : ramène l'utilisateur
 * à la position précédente (ou en haut de page à défaut).
 */
export function BackButton({
  target = "#top",
  label = "Retour",
}: {
  target?: string;
  label?: string;
}) {
  const handleClick = () => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      <ArrowUpLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </button>
  );
}
