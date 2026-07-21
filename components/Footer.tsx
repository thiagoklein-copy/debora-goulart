import Logo from "@/components/ui/Shared";
import {
  NAV_LINKS,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_INSTAGRAM_URL,
  CLINIC_INSTAGRAM,
  PROFESSIONAL_CRP,
  buildWhatsAppUrl,
} from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";

const serviceLinks = [
  { label: "Ansiedade e Pânico", href: "#ansiedade-panico" },
  { label: "Depressão", href: "#depressao" },
  { label: "Transtornos Alimentares", href: "#transtornos-alimentares" },
  { label: "Avaliação Neuropsicológica", href: "#avaliacao-neuropsicologica" },
  { label: "Hipnoterapia", href: "#hipnoterapia" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-sand-dark">
      <div className="section-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Psicoterapia baseada em evidências (TCC) — em Novo Hamburgo.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest">
              Atendimentos
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-forest">
              Contato
            </h3>
            <address className="space-y-2 not-italic">
              <p className="text-sm text-text-muted">{CLINIC_ADDRESS}</p>
              <p>
                <a
                  href={buildWhatsAppUrl("Olá, Greice! Gostaria de mais informações.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-forest"
                >
                  {CLINIC_PHONE}
                </a>
              </p>
              <p>
                <a
                  href={CLINIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-forest"
                >
                  <FaInstagram className="h-4 w-4" />
                  {CLINIC_INSTAGRAM}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-forest/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">
              © {year} Greice Berlitz. Todos os direitos reservados.
            </p>
            <p className="text-xs text-text-muted">{PROFESSIONAL_CRP}</p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-text-muted/80">
            Este site não substitui atendimento de urgência. Em caso de crise,
            procure o CVV (188) ou o serviço de emergência mais próximo.
          </p>
        </div>
      </div>
    </footer>
  );
}
