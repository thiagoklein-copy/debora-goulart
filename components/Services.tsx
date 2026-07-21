"use client";

import { motion } from "framer-motion";
import {
  HiHeart,
  HiSparkles,
  HiBeaker,
  HiUserGroup,
  HiMoon,
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
  whatsappTopic: string;
}

const services: Service[] = [
  {
    id: "ansiedade-panico",
    icon: HiSparkles,
    title: "Ansiedade e Síndrome do Pânico",
    description:
      "Tratamento baseado em TCC para quebrar o ciclo de crises de ansiedade e pânico, com técnicas práticas para o dia a dia.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "tratamento de Ansiedade e Pânico",
  },
  {
    id: "depressao",
    icon: HiHeart,
    title: "Depressão",
    description:
      "Acompanhamento estruturado e baseado em evidências para retomar a qualidade de vida e o bem-estar emocional.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "tratamento de Depressão",
  },
  {
    id: "transtornos-alimentares",
    icon: HiUserGroup,
    title: "Transtornos Alimentares",
    description:
      "Abordagem especializada para uma relação mais saudável com a alimentação e o corpo, com foco em resultado sustentável.",
    duration: "50 min",
    price: "Sob consulta",
    whatsappTopic: "Transtornos Alimentares",
  },
  {
    id: "avaliacao-neuropsicologica",
    icon: HiBeaker,
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação completa de funções cognitivas para diagnóstico preciso e direcionamento terapêutico adequado.",
    duration: "Sob avaliação",
    price: "Sob consulta",
    whatsappTopic: "Avaliação Neuropsicológica",
  },
  {
    id: "hipnoterapia",
    icon: HiMoon,
    title: "Hipnoterapia",
    description:
      "Técnica complementar para acelerar processos terapêuticos e trabalhar padrões inconscientes de forma segura.",
    duration: "50 min",
    price: "Sob consulta",
    whatsappTopic: "Hipnoterapia",
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
      className="card-surface flex h-full w-full flex-col p-6 sm:w-[calc(50%-0.75rem)] sm:p-8 lg:w-[calc(33.333%-1rem)]"
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
        href={buildWhatsAppUrl(
          `Olá, Greice! Gostaria de saber mais sobre: ${service.whatsappTopic}`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-5 w-full text-center text-sm"
      >
        Saiba mais
      </a>
    </motion.article>
  );
}

export default function Services() {
  return (
    <MotionSection id="atendimentos" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Áreas de atuação"
          title={
            <>
              Atendimentos pensados para cada etapa da sua{" "}
              <em className="not-italic text-accent">jornada</em>
            </>
          }
        />

        {/* flex + justify-center: com 5 cards, a 2ª linha (2 itens) fica centralizada */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-2 text-center text-sm text-text-muted">
          <p>
            Valores podem variar conforme avaliação inicial. Consulte condições de
            convênio e parcelamento.
          </p>
          <p>Atende crianças, adolescentes e adultos.</p>
        </div>
      </div>
    </MotionSection>
  );
}
