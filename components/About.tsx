"use client";

import { motion } from "framer-motion";
import { HiHeart, HiShieldCheck } from "react-icons/hi";
import { LuLeaf } from "react-icons/lu";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { WHATSAPP_URL } from "@/lib/constants";

const values = [
  { icon: HiHeart, label: "TCC baseada em evidências" },
  { icon: LuLeaf, label: "Resultado em 3 meses" },
  { icon: HiShieldCheck, label: "Formação UFRGS" },
];

export default function About() {
  return (
    <MotionSection id="sobre" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Sobre mim"
          title={
            <>
              Terapia com foco em{" "}
              <em className="italic text-accent">resultado</em>, sem enrolação
            </>
          }
        />

        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center text-base leading-relaxed text-text-muted sm:text-lg">
          <p>
            Sou psicóloga há 16 anos, especialista em Terapia Cognitivo-Comportamental
            (TCC), com atuação também em Avaliação Neuropsicológica e Hipnoterapia.
            Atendo crianças, adolescentes e adultos, com foco em ansiedade, síndrome
            do pânico, depressão e transtornos alimentares.
          </p>
          <p>
            Minha abordagem é direta e baseada em evidências científicas: trabalho no
            problema atual para gerar mudanças reais e perceptíveis já nos primeiros
            meses de acompanhamento. Sou graduada pela ULBRA (2007) e pós-graduada em
            Terapia Cognitivo-Comportamental pela UFRGS (2012).
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-surface flex flex-col items-center p-8 text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="h-7 w-7" />
              </div>
              <p className="font-medium text-forest">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar uma sessão
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
