"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";

const testimonials = [
  {
    quote:
      "A clínica fica super bem localizada no Centro de Novo Hamburgo e o ambiente é acolhedor desde a recepção. Comecei a terapia em 2024 e hoje me sinto muito mais segura para lidar com as coisas do dia a dia.",
    author: "Adriana B.",
  },
  {
    quote:
      "Cheguei desconfiada, depois de uma experiência ruim em outro lugar. A Luiza me ajudou a recuperar o equilíbrio com muita escuta e profissionalismo.",
    author: "Ezequiel A.",
  },
  {
    quote:
      "A Nara é uma profissional incrível. Me senti acolhida desde a primeira sessão e percebi mudanças reais na forma como encaro meus desafios.",
    author: "Paula B.",
  },
  {
    quote:
      "Levei minha filha para avaliação e fomos muito bem atendidos no horário marcado. Hoje ela segue em acompanhamento com uma profissional excelente.",
    author: "Jerônimo V.",
  },
  {
    quote:
      "Já frequento há mais de 6 meses. Atendimento atencioso, pontual e com resultados visíveis na minha rotina.",
    author: "Joel M.",
  },
  {
    quote:
      "Ambiente agradável, profissionais qualificadas e um cuidado que vai muito além da sessão de 50 minutos.",
    author: "Suelen Z.",
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
              Quem já caminhou com a{" "}
              <em className="italic text-accent">gente</em>
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
            <ReviewAvatars />
            <div className="flex items-center gap-2">
              <Stars />
              <span className="text-sm font-medium text-forest">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
