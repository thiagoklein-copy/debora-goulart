"use client";

import { motion } from "framer-motion";
import { HiUser, HiUsers, HiHeart, HiVideoCamera } from "react-icons/hi2";
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
      "Sessões semanais de escuta psicanalítica para ansiedade, relacionamentos, autoconhecimento e momentos de transição de vida.",
    duration: "50 min",
    price: "Valores sob consulta",
  },
  {
    id: "psicoterapia-infantojuvenil",
    icon: HiUsers,
    title: "Psicoterapia Infantojuvenil",
    description:
      "Acompanhamento especializado para crianças e adolescentes, trabalhando junto com a família para um desenvolvimento emocional saudável.",
    duration: "50 min",
    price: "Valores sob consulta",
  },
  {
    id: "dependencia-quimica",
    icon: HiHeart,
    title: "Dependência Química",
    description:
      "Atendimento especializado a pacientes em tratamento de dependência química, com abordagem acolhedora e sem julgamentos, em parceria com a rede de apoio do paciente.",
    duration: "50 min",
    price: "Sob consulta",
  },
  {
    id: "atendimento-online",
    icon: HiVideoCamera,
    title: "Atendimento Online",
    description:
      "Mesma qualidade de escuta e cuidado, de onde você estiver — sessões por videochamada com total sigilo e conforto.",
    duration: "50 min",
    price: "Mesmo valor do atendimento presencial",
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
        href={buildWhatsAppUrl(
          `Olá, Débora! Gostaria de saber mais sobre: ${service.title}`,
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
          eyebrow="Como posso te ajudar"
          title={
            <>
              Atendimentos pensados para cada etapa da sua{" "}
              <em className="not-italic text-accent">jornada</em>
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-muted">
          Valores podem variar conforme avaliação inicial e modalidade de
          atendimento. Consulte condições de convênio e parcelamento.
        </p>
      </div>
    </MotionSection>
  );
}
