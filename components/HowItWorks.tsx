"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";

const steps = [
  {
    number: "01",
    title: "Contato inicial",
    description:
      "Você envia uma mensagem no WhatsApp contando um pouco sobre o que está buscando.",
  },
  {
    number: "02",
    title: "Primeira sessão",
    description:
      "Conheço sua história e definimos juntos a melhor abordagem de cuidado.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    description:
      "Primeiros resultados percebidos em até 3 meses de acompanhamento — no seu ritmo, comigo.",
  },
];

export default function HowItWorks() {
  return (
    <MotionSection className="bg-forest-dark py-20 text-white sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Como funciona"
          light
          title={
            <>
              Três passos para começar seu{" "}
              <em className="italic text-accent-warm">cuidado</em>
            </>
          }
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="font-serif text-5xl font-light text-accent-warm/60">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 bg-accent-warm/40 md:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
