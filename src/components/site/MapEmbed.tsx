import { company } from "@/lib/company";

export function MapEmbed() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=14&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-secondary shadow-[var(--shadow-card)]">
      <iframe
        title={`Localisation de ${company.name} à Port-Gentil`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[340px] w-full border-0 lg:h-full lg:min-h-[440px]"
      />
    </div>
  );
}
