"use client";

import { motion } from "framer-motion";
import {
  HiUser,
  HiUsers,
  HiClipboardDocumentCheck,
  HiHeart,
  HiAcademicCap,
} from "react-icons/hi2";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { buildWhatsAppUrl } from "@/lib/constants";
import type { IconType } from "react-icons";

interface Service {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  {
    id: "psicoterapia-adultos",
    icon: HiUser,
    title: "Psicoterapia Individual (Adultos)",
    description:
      "Sessões semanais para ansiedade, autoestima, relacionamentos e desenvolvimento pessoal.",
    duration: "50 min",
    price: "A partir de R$ 180/sessão",
  },
  {
    id: "psicoterapia-infantojuvenil",
    icon: HiUsers,
    title: "Psicoterapia Infantojuvenil",
    description:
      "Acompanhamento para crianças e adolescentes, com escuta lúdica e suporte à família.",
    duration: "50 min",
    price: "A partir de R$ 180/sessão",
  },
  {
    id: "avaliacao-tea-tdah",
    icon: HiClipboardDocumentCheck,
    title: "Avaliação Psicológica (TEA/TDAH)",
    description:
      "Processo estruturado de avaliação para diagnóstico e laudo, com devolutiva detalhada.",
    duration: "Processo de 4 a 6 encontros",
    price: "Sob consulta",
  },
  {
    id: "violencia-mulher",
    icon: HiHeart,
    title: "Atendimento a Mulheres em Situação de Violência",
    description:
      "Espaço seguro de escuta e fortalecimento, com abordagem especializada.",
    duration: "50 min",
    price: "A partir de R$ 180/sessão",
  },
  {
    id: "palestras-workshops",
    icon: HiAcademicCap,
    title: "Palestras e Workshops (Empresas e Escolas)",
    description:
      "Conteúdos sobre saúde mental, educação e relações humanas saudáveis para equipes e instituições de ensino.",
    duration: "Sob orçamento",
    price: "Sob orçamento",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      id={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="card-surface flex h-full flex-col p-6 sm:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-serif text-xl font-medium text-forest">{service.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>

      <div className="mt-4 space-y-1 border-t border-forest/10 pt-4 text-sm">
        <p className="text-text-muted">
          <span className="font-medium text-forest">Duração:</span> {service.duration}
        </p>
        <p className="font-medium text-accent">{service.price}</p>
      </div>

      <a
        href={buildWhatsAppUrl(`Olá! Gostaria de saber mais sobre: ${service.title}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-5 w-full text-center text-sm"
      >
        Saiba mais
      </a>
    </motion.article>
  );
}

const primaryServices = services.slice(0, 3);
const secondaryServices = services.slice(3);

export default function Services() {
  return (
    <MotionSection id="atendimentos" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Como podemos ajudar"
          title={
            <>
              Atendimentos pensados para cada etapa da sua{" "}
              <em className="not-italic text-accent">jornada</em>
            </>
          }
        />

        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service, index) => (
              <div
                key={service.id}
                className={
                  index === 2
                    ? "sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:max-w-none"
                    : undefined
                }
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {secondaryServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index + primaryServices.length}
              />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-muted">
          Valores podem variar conforme avaliação inicial e modalidade de
          atendimento. Consulte condições de convênio e parcelamento.
        </p>
      </div>
    </MotionSection>
  );
}
