import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>

          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            Fale Conosco
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Solicite seu orçamento.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Entre em contato e receba um orçamento personalizado para seu projeto. 
            Estamos prontos para atender suas necessidades.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">(55)99205-6342</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">contato@gardin.com.br</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">Av. Plácido de Castro, 1433 - Cruz lta - RS</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}>

          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Nome</label>
            <input
              type="text"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Seu nome completo" />

          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">E-mail</label>
            <input
              type="email"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="seu@email.com" />

          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Mensagem</label>
            <textarea
              rows={5}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Descreva seu projeto..." />

          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity">

            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>);

};

export default ContactSection;