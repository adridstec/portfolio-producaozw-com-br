import { motion } from "framer-motion";
import heroImg from "@/assets/hero-grafica.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Materiais gráficos impressos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Impressão de Alta Qualidade
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] mb-6">
            Suas ideias,{" "}
            <span className="text-gradient">impressas</span>{" "}
            com excelência.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10">
            Transformamos conceitos em materiais gráficos de impacto. 
            Qualidade, agilidade e acabamento impecável em cada projeto.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Ver Portfólio
            </a>
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 border border-border text-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
