import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { company, images } from "@/lib/company";

const nav = [
  { label: "Société", href: "/#societe" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Valeurs", href: "/#valeurs" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={images.logo}
            alt={`Logo ${company.name}`}
            className="h-10 w-auto sm:h-12"
            width={140}
            height={48}
          />
          <span className="sr-only">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-foreground hover:bg-secondary hover:text-primary"
                  : "text-primary-foreground/85 hover:bg-white/10 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phones[1]?.replace(/\s/g, "")}`}
            className={`orbit-border hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:inline-flex ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-primary-foreground/12 text-primary-foreground ring-1 ring-white/25 ring-inset"
            }`}
          >
            <Phone className="size-4" />
            {company.phones[1]}
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex size-10 items-center justify-center rounded-md transition-colors duration-200 lg:hidden ${
              scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-white/10"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
