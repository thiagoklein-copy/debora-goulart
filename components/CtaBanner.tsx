"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { IMAGES, WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <MotionSection className="py-8 sm:py-12">
      <div className="section-container">
        <div className="overflow-hidden rounded-4xl bg-forest-dark shadow-card">
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                  Dar o primeiro passo já é parte do{" "}
                  <em className="italic text-accent-warm">cuidado</em>
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">
                  Fale agora com a Greice e agende sua primeira sessão.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-8"
                >
                  Quero agendar pelo WhatsApp
                </a>
              </motion.div>
            </div>

            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[420px] lg:h-full">
              <Image
                src={IMAGES.ctaBanner.src}
                alt={IMAGES.ctaBanner.alt}
                fill
                className="object-cover"
                style={{ objectPosition: IMAGES.ctaBanner.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
