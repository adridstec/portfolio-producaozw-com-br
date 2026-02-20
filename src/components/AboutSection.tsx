import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "5.000+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "24h", label: "Entrega Expressa" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            Quem Somos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Tradição e inovação em cada impressão.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Somos uma gráfica com mais de 15 anos de experiência no mercado, 
            dedicada a transformar ideias em materiais impressos de alta qualidade. 
            Nossa equipe combina técnica e criatividade para entregar resultados 
            que superam expectativas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Investimos constantemente em tecnologia de ponta e processos 
            sustentáveis, garantindo acabamentos impecáveis e prazos ágeis 
            para cada projeto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-sm p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
