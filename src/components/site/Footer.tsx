import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { company, images, services } from "@/lib/company";
import { AuraBackground } from "@/components/ui/aura-background";

export function Footer() {
  return (
    <footer className="surface-navy relative overflow-hidden">
      <AuraBackground />
      <div className="relative z-1 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="inline-flex rounded-lg bg-white p-4">
            <img
              src={images.logo}
              alt={`Logo ${company.name}`}
              className="h-16 w-auto"
              width={240}
              height={64}
              loading="lazy"
            />
          </div>
          <p className="mt-5 max-w-md text-sm/6 text-primary-foreground/75">
            {company.legal} — plus de 4 ans d'expérience au Gabon dans la sûreté électronique,
            les réseaux informatiques et les télécommunications, de l'achat du matériel à la
            maintenance des installations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-wide text-primary-foreground uppercase">
            Nos services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/75 transition-colors duration-200 hover:text-primary-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-wide text-primary-foreground uppercase">
            Nous contacter
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-signal)]" />
              <span>
                {company.address}
                <br />
                {company.postal}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-signal)]" />
              <span>
                {company.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block transition-colors duration-200 hover:text-primary-foreground"
                  >
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-signal)]" />
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-200 hover:text-primary-foreground"
              >
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-[var(--color-signal)]" />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-1 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legal}. Tous droits réservés.
          </p>
          <p>Port-Gentil · Gabon</p>
        </div>
      </div>
    </footer>
  );
}
