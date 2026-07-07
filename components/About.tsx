"use client";

import { motion } from "framer-motion";
import { HiHeart, HiShieldCheck } from "react-icons/hi";
import { LuLeaf } from "react-icons/lu";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader } from "@/components/ui/Shared";
import { WHATSAPP_URL } from "@/lib/constants";

const values = [
  { icon: HiHeart, label: "Acolhimento" },
  { icon: LuLeaf, label: "Ética e sigilo" },
  { icon: HiShieldCheck, label: "Formação continuada" },
];

export default function About() {
  return (
    <MotionSection id="sobre" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Sobre mim"
          title={
            <>
              A psicoterapia como um espaço de{" "}
              <em className="italic text-accent">encontro</em> comigo mesma... e com
              você
            </>
          }
        />

        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center text-base leading-relaxed text-text-muted sm:text-lg">
          <p>
            Sou psicóloga há 25 anos, com atuação voltada à psicoterapia de orientação
            psicanalítica para crianças, adolescentes e adultos. Ao longo da minha
            trajetória, me especializei também no tratamento da dependência química,
            unindo profundidade técnica a um cuidado genuinamente humano.
          </p>
          <p>
            Acredito que a terapia é um espaço de escuta sem julgamentos — onde cada
            pessoa pode se entender melhor e construir escolhas mais saudáveis para a
            sua vida. Atendo em consultório no Bairro Rio Branco, em Novo Hamburgo, e
            também de forma online.
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
