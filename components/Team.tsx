"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { IMAGES, buildWhatsAppUrl } from "@/lib/constants";

const professional = {
  name: "Débora Goulart",
  tag: "Psicóloga · Orientação Psicanalítica",
  credentials: [
    "CRP 07/09287",
    "25 anos de experiência clínica",
    "Especialista em Dependência Química",
    "Psicoterapia de Orientação Psicanalítica (crianças, adolescentes e adultos)",
    "Diplomatura Internacional em Desastres e Traumas",
    "Participação no Grupo Vagalumes — Psicoterapia Focal e Estudos sobre o Traumático",
  ],
  bio: "Atendo com escuta atenta e profundidade técnica, unindo décadas de prática clínica ao cuidado com cada história. Acredito em uma terapia conduzida com ética, empatia e constante atualização profissional.",
  modality: "Atendimento: presencial e online",
};

export default function Team() {
  return (
    <MotionSection id="formacao" className="bg-sand-dark/50 py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Minha formação"
          title={
            <>
              Trajetória dedicada ao seu{" "}
              <em className="not-italic text-accent">cuidado</em>
            </>
          }
        />

        <div className="mx-auto max-w-2xl">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-surface flex h-full flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* SUBSTITUIR por foto profissional da Débora */}
              <Image
                src={IMAGES.debora.src}
                alt={IMAGES.debora.alt}
                fill
                className="object-cover"
                style={{ objectPosition: IMAGES.debora.objectPosition }}
                sizes="(max-width: 672px) 100vw, 672px"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest">
                {professional.tag}
              </span>

              <h3 className="mt-4 font-serif text-2xl font-medium text-forest">
                {professional.name}
              </h3>

              <ul className="mt-3 space-y-1 text-sm text-text-muted">
                {professional.credentials.map((cred) => (
                  <li key={cred}>· {cred}</li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {professional.bio}
              </p>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-accent">
                {professional.modality}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href={buildWhatsAppUrl(
                    "Olá, Débora! Gostaria de agendar uma consulta.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center sm:w-auto"
                >
                  Agendar com Débora
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </MotionSection>
  );
}
