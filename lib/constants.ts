export const WHATSAPP_NUMBER = "5551998204918";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Greice! Gostaria de agendar uma consulta.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a psicóloga", href: "#sobre" },
  { label: "Especialidades", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const CLINIC_ADDRESS =
  "Av. Cel. Frederico Linck, 714, Sala 205, Centro, Novo Hamburgo - RS, CEP 93336-002";

export const CLINIC_PHONE = "(51) 99820-4918";
/* CONFIRMAR handle oficial do Instagram antes de publicar */
export const CLINIC_INSTAGRAM = "@psicologa_greiceberlitz";
export const CLINIC_INSTAGRAM_URL =
  "https://www.instagram.com/psicologa_greiceberlitz/";
export const PROFESSIONAL_CRP = "CRP 07/16250";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Av.+Cel.+Frederico+Linck,+714,+Sala+205,+Novo+Hamburgo+-+RS&hl=pt&z=16&output=embed";

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
  greice: {
    src: "/team-luiza.jpg",
    alt: "Greice Berlitz, psicóloga especialista em TCC",
    objectPosition: "50% 45%",
  },
} as const;
