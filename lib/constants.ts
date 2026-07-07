export const WHATSAPP_NUMBER = "5551996674741";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Débora! Gostaria de agendar uma consulta.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const CLINIC_ADDRESS =
  "Edifício Med Center — R. Tupi, 951, Sala 1004, Bairro Rio Branco, Novo Hamburgo - RS, CEP 93310-500";

export const CLINIC_PHONE = "(51) 99667-4741";
export const CLINIC_INSTAGRAM = "@psicologa_deboragoulart";
export const CLINIC_INSTAGRAM_URL =
  "https://www.instagram.com/psicologa_deboragoulart/";
export const PROFESSIONAL_CRP = "CRP 07/09287";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Edif%C3%ADcio+Med+Center,+R.+Tupi,+951,+Novo+Hamburgo+-+RS&hl=pt&z=16&output=embed";

export const IMAGES = {
  hero: {
    src: "/hero.jpg",
    alt: "Ambiente acolhedor de consultório, representando calma e autocuidado",
    objectPosition: "50% 35%",
  },
  ctaBanner: {
    src: "/cta-banner.jpg",
    alt: "Pessoa em meditação vista de costas, em luz dourada",
    objectPosition: "50% 22%",
  },
  debora: {
    src: "/team-luiza.jpg",
    alt: "Débora Goulart, psicóloga clínica",
    objectPosition: "50% 45%",
  },
} as const;
