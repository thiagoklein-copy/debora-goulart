export const WHATSAPP_NUMBER = "5551993711882";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Gostaria de agendar uma consulta na Clínica Psicologar.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Psicólogas", href: "#psicologas" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const CLINIC_ADDRESS =
  "Rua Silveira Martins, 810 — Salas 206 e 208, Centro, Novo Hamburgo - RS, CEP 93510-310";

export const CLINIC_PHONE = "(51) 99371-1882";
export const CLINIC_INSTAGRAM = "@clinicapsicologarnh";
export const CLINIC_INSTAGRAM_URL = "https://www.instagram.com/clinicapsicologarnh";

// TODO: Replace with real Google Maps embed URL for clinic coordinates
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-51.1306!3d-29.6874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Silveira%20Martins%2C%20810!5e0!3m2!1spt-BR!2sbr!4v1";

// Imagens locais em /public — substituir por fotos reais da clínica/equipe antes do lançamento
export const IMAGES = {
  hero: {
    src: "/hero.jpg",
    alt: "Silhueta em meditação ao entardecer, representando calma e autocuidado",
    objectPosition: "50% 35%",
  },
  ctaBanner: {
    src: "/cta-banner.jpg",
    alt: "Pessoa em meditação vista de costas, em luz dourada",
    objectPosition: "50% 22%",
  },
  luiza: {
    src: "/team-luiza.jpg",
    alt: "Livros e materiais lúdicos, representando psicologia infantojuvenil e avaliação",
    objectPosition: "50% 45%",
  },
  nara: {
    src: "/team-nara.jpg",
    alt: "Livro aberto sobre intimidade e relações, representando escuta psicanalítica",
    objectPosition: "50% 50%",
  },
} as const;
