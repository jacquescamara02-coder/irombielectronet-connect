import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/company";

const faqs = [
  {
    question: "Quels types de caméras de surveillance installez-vous ?",
    answer:
      "Nous installons des caméras IP, analogiques HD, dômes, bullets, PTZ et fisheye, adaptées à vos besoins intérieurs ou extérieurs. Chaque projet fait l'objet d'une étude de couverture pour choisir les bons optiques et assurer une image exploitable.",
  },
  {
    question: "Pouvez-vous intervenir en dehors de Port-Gentil ?",
    answer:
      "Oui. Bien que notre siège soit à Port-Gentil, nous déployons nos équipes sur l'ensemble du territoire gabonais pour l'installation, la mise en service et la maintenance de vos équipements.",
  },
  {
    question: "Proposez-vous un service d'astreinte ou de maintenance ?",
    answer:
      "Absolument. Nous assurons l'assistance technique et proposons des contrats de maintenance préventive et curative. Une astreinte est également disponible 24h/24 et 7j/7 pour les incidents critiques.",
  },
  {
    question: "Quel délai pour obtenir un devis ?",
    answer:
      "Après une première prise de contact et, si nécessaire, une visite technique, nous vous transmettons un devis détaillé sous 24 à 48 heures ouvrées en fonction de la complexité du site.",
  },
  {
    question: "Installez-vous aussi les réseaux informatiques et la téléphonie ?",
    answer:
      "Oui, c'est au cœur de notre métier. Nous réalisons le câblage structuré, le brassage de baies, le déploiement Wi-Fi, la téléphonie VoIP, la radio VHF et les liaisons point à point par faisceaux hertziens.",
  },
  {
    question: "Les systèmes installés sont-ils supervisables à distance ?",
    answer:
      "Oui. Nous configurons l'accès à distance sécurisé pour vos caméras, votre supervision réseau ou vos équipements télécom, afin que vous puissiez piloter et vérifier vos installations depuis votre smartphone ou un poste de contrôle.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="sticky top-28">
            <span className="rule-signal block h-1 w-12 rounded-full" />
            <h2 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-base/7 text-muted-foreground">
              Vous avez une question précise ? Notre équipe est disponible pour vous orienter et
              établir un devis adapté à votre projet.
            </p>
            <a
              href={whatsappLink("Bonjour, j'ai une question concernant vos services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-border mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MessageCircleQuestion className="size-4" />
              Poser une question
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={item.question} delay={i * 60}>
                  <div className="group">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-secondary/40 sm:px-6 sm:py-6"
                    >
                      <span className="text-base font-semibold text-foreground sm:text-lg">
                        {item.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-200 group-hover:border-primary/30 group-hover:text-primary ${
                          isOpen ? "bg-primary text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[var(--ease-out-soft)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-sm/6 text-muted-foreground sm:px-6 sm:text-base/7">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
