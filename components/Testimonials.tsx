"use client";

import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { SectionHeader, Stars } from "@/components/ui/Shared";
import ReviewAvatars from "@/components/ui/ReviewAvatars";

/*
 * PENDENTE — a mensagem do cliente foi cortada no 1º depoimento.
 * Colar aqui os 6 textos reais do Google (com nomes públicos) quando o usuário reenviar a seção 8.
 */
const testimonials: { quote: string; author: string }[] = [];

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

        {testimonials.length > 0 ? (
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
        ) : (
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-text-muted">
            Depoimentos reais do Google serão exibidos aqui em breve.
          </p>
        )}

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
