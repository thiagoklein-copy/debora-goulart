"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { IMAGES, buildWhatsAppUrl } from "@/lib/constants";

const psychologists = [
  {
    name: "Luiza Killing",
    imageKey: "luiza" as const,
    tag: "Psicóloga Cognitivo Comportamental",
    credentials: [
      "Mestre em Psicologia Social",
      "Especialista em Neuropsicologia",
      "Psicologia & Educação",
      "Psicologia Positiva",
      "Avaliação Psicológica",
    ],
    bio: "Atendo com foco em TEA, TDAH, transtornos de humor e desenvolvimento humano em todas as fases da vida. Acredito em uma psicologia baseada em evidências, mas conduzida com empatia.",
    languages: "PT · EN · ES",
  },
  {
    name: "Nara Margaret de Vargas Vianna",
    imageKey: "nara" as const,
    tag: "Psicóloga e Advogada · Abordagem Psicanalítica",
    credentials: [
      "Terapia Breve Focal",
      "Avaliação Psicológica",
      "Especialista em Dependência Química",
      "Referência em atendimento a mulheres em situação de violência",
      "CRP 07/11100",
    ],
    bio: "Combino formação em Direito e Psicologia para oferecer um olhar integral, especialmente no acolhimento de mulheres e em processos de avaliação psicológica e dependência química.",
    languages: null,
  },
];

export default function Team() {
  return (
    <MotionSection id="psicologas" className="bg-sand-dark/50 py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Nossa equipe"
          title={
            <>
              Profissionais que caminham{" "}
              <em className="not-italic text-accent">ao seu lado</em>
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {psychologists.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="card-surface flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* TODO: Substituir por fotos reais das profissionais em /public quando disponíveis */}
                <Image
                  src={IMAGES[person.imageKey].src}
                  alt={IMAGES[person.imageKey].alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: IMAGES[person.imageKey].objectPosition }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
                  {person.tag}
                </span>

                <h3 className="mt-4 font-serif text-2xl font-medium text-forest">
                  {person.name}
                </h3>

                <ul className="mt-3 space-y-1 text-sm text-text-muted">
                  {person.credentials.map((cred) => (
                    <li key={cred}>· {cred}</li>
                  ))}
                </ul>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {person.bio}
                </p>

                <p
                  className={`mt-3 min-h-5 text-xs font-medium uppercase tracking-wider ${
                    person.languages ? "text-accent" : "invisible"
                  }`}
                >
                  {person.languages ? `Idiomas: ${person.languages}` : "—"}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href={buildWhatsAppUrl(
                      `Olá! Gostaria de agendar uma consulta com ${person.name} na Clínica Psicologar.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center sm:w-auto"
                  >
                    Agendar com {person.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
