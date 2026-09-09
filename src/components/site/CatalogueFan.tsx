import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/company";

export function CatalogueFan() {
  return (
    <div className="catalogue-stage" role="list" aria-label="Catalogue des prestations">
      {services.map((service) => (
        <Link
          key={service.slug}
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="catalogue-panel group"
          role="listitem"
          aria-label={`Découvrir ${service.title}`}
        >
          <img
            src={service.image}
            alt={`${service.title} — installation réalisée par IROMBI-ELECTRONET à Port-Gentil`}
            className="catalogue-panel-image"
            loading="lazy"
            width={520}
            height={720}
          />
          <span className="catalogue-panel-wash" aria-hidden="true" />
          <span className="catalogue-panel-content">
            <span className="catalogue-panel-title">{service.title}</span>
            <ArrowUpRight className="catalogue-panel-icon" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}