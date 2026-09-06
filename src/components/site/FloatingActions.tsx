import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { company, whatsappLink } from "@/lib/company";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.15c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.24-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        aria-label="Revenir en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-primary shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>

      <a
        href={whatsappLink(
          `Bonjour ${company.name}, je souhaite un devis pour une installation.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="pulse-ring orbit-border group inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] py-3 pr-4 pl-3 font-semibold text-white shadow-[var(--shadow-lift)] transition-transform duration-200 hover:-translate-y-1"
      >
        <WhatsAppIcon className="size-6" />
        <span className="hidden text-sm sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export { WhatsAppIcon };
