"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES, WHATSAPP_URL } from "@/lib/constants";

const trustItems = [
  "16 anos de experiência",
  "5,0 ⭐ no Google",
  "39 avaliações",
  "CRP 07/16250",
] as const;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forest/[0.06] via-sand to-sand" />
      <div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-forest/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative pb-16 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest backdrop-blur-sm">
              16 anos de experiência em TCC
            </span>

            <h1 className="max-w-xl font-serif text-[1.75rem] font-medium leading-[1.15] tracking-tight text-forest sm:max-w-2xl sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl">
              <span className="block text-balance">
                Mudanças reais começam na próxima sessão.
              </span>
              <span className="mt-2 block text-balance font-normal italic text-accent sm:mt-3">
                Vamos começar juntos?
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:mt-6 sm:text-lg">
              Psicoterapia baseada em evidências (TCC) para ansiedade, pânico,
              depressão e transtornos alimentares. Atendimento presencial em Novo
              Hamburgo, com resultados desde as primeiras semanas.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Falar no WhatsApp
              </a>
              <a href="#atendimentos" className="btn-ghost text-center">
                Conhecer as especialidades
              </a>
            </div>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-forest/10 pt-6 text-sm text-text-muted"
            >
              {trustItems.map((item) => (
                <li key={item} className="font-medium text-forest">
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-4xl shadow-card sm:aspect-[4/3] lg:aspect-[5/6]">
              {/* SUBSTITUIR por foto real da Greice ou do consultório — aguardando envio */}
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: IMAGES.hero.objectPosition }}
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-4xl bg-accent/15 sm:block" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl bg-forest/10" />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[220px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                TCC baseada em evidências
              </p>
              <p className="mt-0.5 text-sm text-text-muted">
                Crianças, adolescentes e adultos
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
