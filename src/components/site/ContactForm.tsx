import { useState } from "react";
import { Loader2, Mail, Send } from "lucide-react";
import { company, services, whatsappLink } from "@/lib/company";
import { WhatsAppIcon } from "./FloatingActions";

type Errors = Partial<Record<"name" | "phone" | "service" | "message", string>>;

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const buildSummary = () =>
    [
      `Demande de devis — ${company.name}`,
      `Nom : ${form.name}`,
      form.company ? `Société : ${form.company}` : "",
      `Téléphone : ${form.phone}`,
      form.email ? `E-mail : ${form.email}` : "",
      `Prestation : ${form.service}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Merci d'indiquer votre nom.";
    if (form.phone.trim().length < 6) e.phone = "Un numéro joignable est nécessaire.";
    if (!form.service) e.service = "Sélectionnez une prestation.";
    if (form.message.trim().length < 10) e.message = "Décrivez votre besoin en quelques mots.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    const summary = buildSummary();
    window.setTimeout(() => {
      window.open(whatsappLink(summary), "_blank", "noopener,noreferrer");
      setSending(false);
      setSent(true);
    }, 600);
  };

  const fieldClass = (invalid?: string) =>
    `w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none ${
      invalid ? "border-destructive" : "border-input"
    }`;

  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
          <Send className="size-5" />
        </div>
        <h3 className="mt-4 text-2xl text-foreground">Votre demande est prête</h3>
        <p className="mt-2 text-sm/6 text-muted-foreground">
          La conversation WhatsApp s'ouvre avec le récapitulatif de votre projet. Si elle ne s'est
          pas ouverte, envoyez-nous directement un e-mail — nous répondons sous 24 heures ouvrées.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(buildSummary())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="size-4" /> Rouvrir WhatsApp
          </a>
          <a
            href={`mailto:${company.email}?subject=${encodeURIComponent("Demande de devis")}&body=${encodeURIComponent(buildSummary())}`}
            className="inline-flex items-center gap-2 rounded-md border border-input px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" /> Envoyer par e-mail
          </a>
        </div>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
        >
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <h3 className="text-2xl text-foreground">Demander un devis</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Décrivez votre site et votre besoin : nous revenons vers vous avec une proposition chiffrée.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Nom et prénom *
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className={fieldClass(errors.name)}
            placeholder="Ex. Guy Mbadinga"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
            Société
          </label>
          <input
            id="company"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            className={fieldClass()}
            placeholder="Nom de votre structure"
            autoComplete="organization"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Téléphone / WhatsApp *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={fieldClass(errors.phone)}
            placeholder="+241 ..."
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={fieldClass()}
            placeholder="vous@societe.com"
            autoComplete="email"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
            Prestation concernée *
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => set("service")(e.target.value)}
            className={fieldClass(errors.service)}
          >
            <option value="">Sélectionnez une prestation</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Autre besoin technique">Autre besoin technique</option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Votre projet *
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            className={`${fieldClass(errors.message)} resize-y`}
            placeholder="Site, nombre de points à équiper, délais souhaités..."
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--navy-deep)] disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
      >
        {sending ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Préparation de votre demande...
          </>
        ) : (
          <>
            <Send className="size-4" /> Envoyer ma demande
          </>
        )}
      </button>

      <p className="mt-3 text-xs text-muted-foreground">
        Votre demande part sur WhatsApp au {company.whatsappDisplay}. Une alternative par e-mail
        vous est proposée juste après.
      </p>
    </form>
  );
}
