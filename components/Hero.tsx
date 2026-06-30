"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES, WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8F0]/40 via-sand to-sand" />

      <div className="section-container relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-6">Clínica de Psicologia em Novo Hamburgo</p>

            <h1 className="font-serif text-4xl font-medium leading-[1.1] text-forest sm:text-5xl lg:text-6xl xl:text-7xl">
              Cuidar da sua mente é um ato de coragem.{" "}
              <em className="italic text-accent">Nós caminhamos com você.</em>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
              Atendimento psicológico humanizado para adultos, adolescentes e
              famílias, no Centro de Novo Hamburgo. Psicoterapia individual,
              avaliação psicológica e suporte especializado em TEA e TDAH.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Falar no WhatsApp
              </a>
              <a href="#psicologas" className="btn-ghost">
                Conhecer as psicólogas
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card sm:aspect-[5/6]">
              {/* TODO: Replace IMAGES.hero.src with /public/hero.jpg (foto real da clínica, sem rostos) */}
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: IMAGES.hero.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-4xl bg-forest/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
