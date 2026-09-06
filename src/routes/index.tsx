import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Cable,
  Radio,
  Antenna,
  ShieldCheck,
  Flame,
  Truck,
  Wrench,
  Settings2,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ContextualSectionBack } from "@/components/site/ContextualSectionBack";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { ContactForm } from "@/components/site/ContactForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { TextBlockAnimation } from "@/components/ui/text-block-animation";
import { AuraBackground } from "@/components/ui/aura-background";
import { company, images, pillars, services, values, whatsappLink } from "@/lib/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "IROMBI-ELECTRONET | Caméras de surveillance & réseaux à Port-Gentil",
      },
      {
        name: "description",
        content:
          "Installation de caméras de surveillance, câblage et brassage réseau, VHF, VoIP et liaisons point à point à Port-Gentil, Gabon. Devis rapide.",
      },
      {
        property: "og:title",
        content: "IROMBI-ELECTRONET | Sûreté électronique & réseaux au Gabon",
      },
      {
        property: "og:description",
        content:
          "Vidéosurveillance, baies informatiques, télécommunications VHF et VoIP, contrôle d'accès et détection incendie à Port-Gentil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const serviceIcons: Record<string, typeof Camera> = {
  videosurveillance: Camera,
  "reseau-informatique": Cable,
  telecommunications: Radio,
  "liaisons-point-to-point": Antenna,
  "controle-acces": ShieldCheck,
  "detection-incendie": Flame,
};

const pillarIcons = [Truck, Settings2, Wrench];

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold tracking-[0.22em] uppercase ${
          light ? "text-[var(--color-signal)]" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <TextBlockAnimation
        blockColor={light ? "var(--color-signal)" : "var(--color-primary)"}
        className={`mt-3 text-4xl font-semibold sm:text-5xl ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        <h2>{title}</h2>
      </TextBlockAnimation>
      {text && (
        <TextBlockAnimation
          delay={0.15}
          stagger={0.05}
          blockColor={light ? "var(--color-signal)" : "var(--color-accent)"}
          className={`mt-4 text-base/7 ${
            light ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          <p>{text}</p>
        </TextBlockAnimation>
      )}
    </div>
  );
}

function Home() {
  return (
    <div id="top" className="carbon-page min-h-screen">
      <Header />
      <FloatingActions />

      <main>
        {/* HERO */}
        <section className="surface-navy relative min-h-screen overflow-hidden bg-[image:var(--gradient-navy)]">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `url(${images.heroCctv})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="hero-image-wash absolute inset-0" aria-hidden="true" />
          <div
            className="sweep-line pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-12 lg:pt-40 lg:pb-28 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase ring-1 ring-white/20 ring-inset">
                  Port-Gentil · Gabon · Depuis plus de 4 ans
                </span>
              </Reveal>
              <h1 className="mt-6 text-[2.2rem] font-semibold break-words hyphens-auto text-primary-foreground sm:text-6xl lg:text-7xl">
                <TextBlockAnimation
                  animateOnScroll={false}
                  delay={0.25}
                  blockColor="var(--color-signal)"
                >
                  Vidéosurveillance, réseaux et télécommunications d'entreprise
                </TextBlockAnimation>
              </h1>
              <TextBlockAnimation
                animateOnScroll={false}
                delay={0.55}
                stagger={0.05}
                blockColor="var(--color-signal)"
                className="mt-6 max-w-xl text-lg/8 text-primary-foreground/80"
              >
                <p>
                  {company.legal} installe, met en service et maintient vos caméras IP, vos baies
                  informatiques, vos systèmes VHF et VoIP.
                </p>
              </TextBlockAnimation>
              <Reveal delay={260}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="orbit-border inline-flex items-center gap-2 rounded-md bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-signal-foreground)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Demander un devis
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#services"
                    className="orbit-border inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-white/10"
                  >
                    Voir nos prestations
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={220}>
                <div className="overflow-hidden rounded-lg ring-1 ring-white/15">
                  <img
                    src={images.heroInstall}
                    alt="Technicien IROMBI-ELECTRONET installant une caméra de surveillance"
                    className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
                    width={800}
                    height={520}
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative border-t border-white/10">
            <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
              {[
                { v: 4, suffix: "+", label: "Années d'expérience" },
                { v: 120, suffix: "+", label: "Installations réalisées" },
                { v: 24, suffix: "/7", label: "Assistance technique" },
                { v: 3, suffix: "", label: "Axes d'intervention" },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <div>
                    <dt className="font-display text-4xl font-semibold text-[var(--color-signal)] sm:text-5xl">
                      <CountUp to={stat.v} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1 text-sm text-primary-foreground/70">{stat.label}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* SOCIETE */}
        <section id="societe" className="scroll-mt-28 bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContextualSectionBack sectionId="societe" />
            <Reveal>
              <SectionTitle
                eyebrow="La société"
                title="Une équipe technique qui accompagne vos projets d'un bout à l'autre"
                text="Forte de plus de 4 ans d'expérience au Gabon, IROMBI-ELECTRONET propose des services techniques aux entreprises et aux collectivités. Implantée à la Nouvelle Route PG1 à Port-Gentil, la société est spécialisée dans les secteurs des télécommunications et de l'électricité."
              />
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
              <Reveal delay={80} className="lg:col-span-5">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={images.teamRack}
                    alt="Techniciens IROMBI-ELECTRONET intervenant sur une installation réseau"
                    className="h-72 w-full object-cover lg:h-[420px]"
                    loading="lazy"
                    width={800}
                    height={620}
                  />
                </div>
              </Reveal>

              <div className="grid gap-4 lg:col-span-7">
                {pillars.map((p, i) => {
                  const Icon = pillarIcons[i] ?? Wrench;
                  return (
                    <Reveal key={p.title} delay={120 + i * 90}>
                      <article className="card-lift flex gap-4 rounded-lg border border-border bg-card p-6">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <h3 className="text-xl text-foreground">{p.title}</h3>
                          <p className="mt-1.5 text-sm/6 text-muted-foreground">{p.text}</p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
                <Reveal delay={420}>
                  <p className="text-sm/6 text-muted-foreground">
                    IROMBI-ELECTRONET est constituée d'une solide équipe de techniciens hautement
                    qualifiés, pour offrir des services répondant aux exigences de ses clients en
                    termes d'efficacité et de performance.
                  </p>
                </Reveal>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-28 bg-secondary/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContextualSectionBack sectionId="services" />
            <Reveal>
              <SectionTitle
                eyebrow="Nos prestations"
                title="Des installations conçues, posées et maintenues par nos soins"
                text="Chaque prestation est détaillée sur sa propre page : cliquez pour découvrir la méthode, les équipements et les livrables."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => {
                const Icon = serviceIcons[s.slug] ?? Camera;
                return (
                  <Reveal key={s.slug} delay={i * 70}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
                          loading="lazy"
                          width={640}
                          height={360}
                        />
                        <span className="absolute top-3 left-3 flex size-10 items-center justify-center rounded-md bg-background/95 text-primary">
                          <Icon className="size-5" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-xl text-foreground">{s.title}</h3>
                        <p className="mt-2 flex-1 text-sm/6 text-muted-foreground">{s.short}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          En savoir plus
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* REALISATIONS */}
        <section id="realisations" className="scroll-mt-28 bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContextualSectionBack sectionId="realisations" />
            <Reveal>
              <SectionTitle
                eyebrow="Réalisations"
                title="Nos chantiers au Gabon, en image"
                text="Barrières automatiques, salles CCTV, baies brassées et contrôle d'accès : un aperçu des installations livrées par nos équipes."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: images.cctv, caption: "Salle CCTV et mur d'écrans", span: "lg:col-span-2" },
                { src: images.barriere, caption: "Barrière levante automatique", span: "" },
                { src: images.brassage, caption: "Brassage de baie informatique", span: "" },
                { src: images.biometrie, caption: "Contrôle d'accès biométrique", span: "" },
                { src: images.cameras, caption: "Caméras IP et analogiques", span: "" },
              ].map((item, i) => (
                <Reveal key={item.caption} delay={i * 70} className={item.span}>
                  <figure className="card-lift group h-full overflow-hidden rounded-lg border border-border bg-card">
                    <div className="overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="h-56 w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-105"
                        loading="lazy"
                        width={720}
                        height={420}
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-sm font-medium text-foreground">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* VALEURS */}
        <section id="valeurs" className="surface-navy relative scroll-mt-28 overflow-hidden py-20 lg:py-28">
          <AuraBackground />
          <div className="relative z-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContextualSectionBack sectionId="valeurs" />
            <Reveal>
              <SectionTitle
                light
                eyebrow="Nos valeurs"
                title="Toujours à la pointe de l'innovation, au service de nos clients"
                text="IROMBI-ELECTRONET s'appuie sur des valeurs fortes pour apporter à ses clients un service d'excellence."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <article className="h-full rounded-lg border border-white/12 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-signal)]/60">
                    <span className="rule-signal block h-1 w-10 rounded-full" />
                    <h3 className="mt-4 text-xl text-primary-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm/6 text-primary-foreground/70">{v.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28 bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContextualSectionBack sectionId="contact" />
            <Reveal>
              <SectionTitle
                eyebrow="Contact"
                title="Parlons de votre installation"
                text="Décrivez votre besoin : nous organisons une visite technique à Port-Gentil et vous remettons une proposition chiffrée."
              />
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <ContactForm />
              </Reveal>

              <div className="flex flex-col gap-6 lg:col-span-5">
                <Reveal delay={100}>
                  <ul className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm/6 text-foreground">
                        {company.address}
                        <span className="block text-muted-foreground">{company.postal}</span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm/6">
                        {company.phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\s/g, "")}`}
                            className="block text-foreground transition-colors duration-200 hover:text-accent"
                          >
                            {p}
                          </a>
                        ))}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm/6 text-foreground transition-colors duration-200 hover:text-accent"
                      >
                        {company.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-sm/6 text-foreground">{company.hours}</span>
                    </li>
                    <li>
                      <a
                        href={whatsappLink(
                          "Bonjour IROMBI-ELECTRONET, je souhaite être rappelé.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="orbit-border inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-4 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Écrire sur WhatsApp · {company.whatsappDisplay}
                      </a>
                    </li>
                  </ul>
                </Reveal>

                <Reveal delay={180} className="flex-1">
                  <MapEmbed />
                </Reveal>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
