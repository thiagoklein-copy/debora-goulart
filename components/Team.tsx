"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { IMAGES, buildWhatsAppUrl } from "@/lib/constants";

const professional = {
  name: "Greice Berlitz",
  tag: "Psicóloga · Especialista em TCC",
  credentials: [
    "CRP 07/16250",
    "16 anos de experiência clínica",
    "Graduação em Psicologia — ULBRA (2007)",
    "Pós-graduação em Terapia Cognitivo-Comportamental — UFRGS (2012)",
    "Especialidades: Psicologia Clínica, Avaliação Neuropsicológica e Hipnoterapia",
    "Abordagens: TCC, Terapia do Esquema e Terapia de Aceitação e Compromisso (ACT)",
  ],
  bio: "Atendo com foco em resultado e base científica, ajudando cada paciente a compreender e transformar seus padrões de pensamento e comportamento. Já atuei em psicologia clínica, hospitalar e organizacional.",
  modality: "Atendimento: presencial (Centro, Novo Hamburgo)",
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

        <div className="mx-auto max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-surface grid overflow-hidden lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-full">
              {/* SUBSTITUIR por foto profissional da Greice */}
              <Image
                src={IMAGES.greice.src}
                alt={IMAGES.greice.alt}
                fill
                className="object-cover"
                style={{ objectPosition: IMAGES.greice.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
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
                    "Olá, Greice! Gostaria de agendar uma consulta.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center sm:w-auto"
                >
                  Agendar com a Greice
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </MotionSection>
  );
}
