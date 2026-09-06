import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { AuraBackground } from "@/components/ui/aura-background";
import { company, services, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    const title = service
      ? `${service.title} | ${company.name} Port-Gentil`
      : `Nos services | ${company.name}`;
    const description = service?.short ?? company.baseline;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function BackControl() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.history.back();
        } else {
          router.navigate({ to: "/", hash: "services" });
        }
      }}
      className="orbit-border group inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
    >
      <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      Retour
    </button>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div id="top" className="carbon-page min-h-screen">
      <Header />
      <FloatingActions />

      <main>
        <section className="surface-navy relative overflow-hidden">
          <AuraBackground />
          <div className="relative z-1 mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-20">
            <Reveal>
              <BackControl />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-2xl text-lg/8 text-primary-foreground/80">{service.intro}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              {service.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="mb-5 text-base/8 text-muted-foreground">{p}</p>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <h2 className="mt-8 text-3xl text-foreground">Ce que comprend la prestation</h2>
                <ul className="mt-5 space-y-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm/7 text-foreground">
                      <Check className="mt-1 size-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="space-y-4 lg:col-span-5">
              {service.gallery.map((g, i) => (
                <Reveal key={g.caption} delay={i * 90}>
                  <figure className="overflow-hidden rounded-lg border border-border bg-card">
                    <img
                      src={g.src}
                      alt={g.caption}
                      className="h-60 w-full object-cover"
                      loading="lazy"
                      width={720}
                      height={420}
                    />
                    <figcaption className="px-5 py-3 text-sm text-muted-foreground">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}

              <Reveal delay={250}>
                <div className="rounded-lg border border-border bg-secondary/60 p-6">
                  <h3 className="text-xl text-foreground">Un besoin sur ce sujet ?</h3>
                  <p className="mt-2 text-sm/6 text-muted-foreground">
                    Nos techniciens se déplacent à Port-Gentil pour une visite technique avant
                    chiffrage.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      to="/"
                      hash="contact"
                      className="orbit-border inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Demander un devis <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href={whatsappLink(
                        `Bonjour ${company.name}, je souhaite des informations sur : ${service.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orbit-border inline-flex items-center gap-2 rounded-md border border-input px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-foreground">Autres prestations</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {others.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="card-lift group flex h-full flex-col rounded-lg border border-border bg-card p-6"
                  >
                    <h3 className="text-lg text-foreground">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm/6 text-muted-foreground">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Découvrir
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/"
                hash="services"
                className="orbit-border group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Retour aux services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
