import { motion } from "framer-motion";
import { Printer, CreditCard, BookOpen, Flag, Package, Sticker } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Cartões de Visita",
    description: "Impressão premium com acabamentos especiais: verniz, laminação e hot stamping.",
  },
  {
    icon: BookOpen,
    title: "Folders & Catálogos",
    description: "Materiais informativos com design profissional e impressão de alta fidelidade.",
  },
  {
    icon: Flag,
    title: "Banners & Faixas",
    description: "Impressão de grande formato para eventos, feiras e comunicação visual.",
  },
  {
    icon: Package,
    title: "Embalagens",
    description: "Caixas e embalagens personalizadas que valorizam sua marca.",
  },
  {
    icon: Sticker,
    title: "Adesivos & Rótulos",
    description: "Adesivos em diversos materiais com corte especial e alta durabilidade.",
  },
  {
    icon: Printer,
    title: "Impressão Digital",
    description: "Tiragens sob demanda com rapidez e qualidade para projetos urgentes.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
          O que fazemos
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Nossos Serviços
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-sm p-8 group hover:border-primary/50 transition-colors"
          >
            <service.icon className="w-8 h-8 text-primary mb-5" />
            <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
