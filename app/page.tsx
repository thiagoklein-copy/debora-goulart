/*
 * CHECKLIST — itens pendentes de confirmação com a Greice antes de publicar:
 * - [ ] Valores reais das sessões (todos os cards estão como "sob consulta")
 * - [ ] Horário de atendimento
 * - [ ] Convênios aceitos (se houver)
 * - [ ] Fotos reais (hero, seção "minha formação", cta-banner)
 * - [ ] 6 depoimentos reais do Google (seção 8 do brief foi cortada no envio)
 * - [ ] Confirmar paleta #6B4E8E com print da identidade visual
 * - [ ] Confirmar handle oficial do Instagram
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
