"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";

const testimonials = [
  {
    quote:
      "Com certeza 5 estrelas. Sem rodeios, ela vai direto ao ponto e a mudança é certa, semana após semana. Já fiz terapia com várias profissionais e a Dra. Greice superou todas as minhas expectativas.",
    author: "Aline C.",
  },
  {
    quote:
      "A minha vida é dividida em antes e depois da Greice. Cada sessão traz um crescimento surreal — indico para todo mundo que posso.",
    author: "Júlia S.",
  },
  {
    quote:
      "Impossível colocar em palavras a transformação que aconteceu na minha vida depois que iniciei o processo terapêutico com a Greice. Em menos de 3 meses minha qualidade de vida deu um salto.",
    author: "Vitória B.",
  },
  {
    quote:
      "Excelente profissional. Através do trabalho da Greice, melhorei diversos pontos na minha vida pessoal e profissional — superou todas as expectativas.",
    author: "Guilherme B.",
  },
  {
    quote:
      "Sou paciente da Greice há 5 anos e sou grata por tudo que aprendi e sigo aprendendo com ela. Minha vida só melhorou depois que dediquei um tempo para a terapia.",
    author: "Bruna P.",
  },
  {
    quote:
      "Minha filha foi muito bem atendida — excelente profissional, atendimento excepcional.",
    author: "Adenir S.",
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
              key={`${item.author}-${index}`}
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
              <span className="text-sm font-medium text-forest">5,0</span>
              <span className="text-sm text-text-muted">· 39 avaliações no Google</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
