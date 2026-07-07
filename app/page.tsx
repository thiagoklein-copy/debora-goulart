/*
 * CHECKLIST — itens pendentes de confirmação com a Débora antes de publicar:
 * - [ ] Valores reais das sessões (todos os cards estão como "sob consulta")
 * - [ ] Horário de atendimento
 * - [ ] Convênios aceitos (se houver)
 * - [ ] Fotos reais (hero, seção "minha formação", cta-banner)
 * - [ ] Confirmação/autorização para uso de depoimentos (os atuais são fictícios/ilustrativos)
 * - [ ] Formação acadêmica completa (faculdade, ano, pós-graduações formais)
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
