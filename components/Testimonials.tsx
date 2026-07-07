"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";

const testimonials = [
  {
    quote:
      "Cheguei depois de já ter passado por outros profissionais, e foi a primeira vez que me senti realmente ouvida. A Débora tem uma escuta muito diferenciada.",
    author: "Marina S.",
  },
  {
    quote:
      "Acompanho com a Débora há mais de 2 anos. É uma relação de muita confiança, sempre com um olhar atento e atualizado.",
    author: "Roberto A.",
  },
  {
    quote:
      "Desde a primeira sessão me senti acolhida. O consultório é tranquilo e ela tem um jeito muito humano de conduzir as conversas.",
    author: "Juliana P.",
  },
  {
    quote:
      "Levei minha filha para acompanhamento e o processo incluiu toda a família. Vimos uma evolução real no comportamento dela.",
    author: "Camila T.",
  },
  {
    quote:
      "O que mais me marca é a combinação de empatia com orientações claras e objetivas. Isso fez toda diferença no meu tratamento.",
    author: "Eduardo M.",
  },
  {
    quote:
      "Profissional extremamente dedicada, sempre em atualização. Recomendo de olhos fechados.",
    author: "Fernanda G.",
  },
];

export default function Testimonials() {
  return (
    <MotionSection id="depoimentos" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Resultados reais"
          title={
            <>
              Quem já caminhou{" "}
              <em className="italic text-accent">comigo</em>
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="card-surface flex flex-col p-6 sm:p-8"
            >
              <Stars className="text-sm" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-forest/10 pt-4">
                <cite className="not-italic font-medium text-forest">
                  {item.author}
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-soft">
            {/* placeholder, trocar se houver autorização dos pacientes */}
            <ReviewAvatars />
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-medium text-forest">5,0</span>
              <span className="text-sm text-text-muted">· 61 avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
