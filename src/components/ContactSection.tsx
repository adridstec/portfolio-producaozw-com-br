import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    const { error } = await supabase.from("orcamentos").insert({
      nome: nome.trim(), email: email.trim(), mensagem: mensagem.trim(),
    });
    setEnviando(false);
    if (error) {
      toast.error("Não foi possível enviar. Tente novamente ou chame no WhatsApp.");
      return;
    }
    toast.success("Mensagem enviada! Retornaremos em breve.");
    setNome(""); setEmail(""); setMensagem("");
  };

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
          <p className="text-muted-foreground leading-relaxed mb-8">Entre em contato e receba um orçamento personalizado.
Estamos prontos para atender as suas necessidades.

          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">(55) 99181-0490</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">zukwebrs@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-secondary-foreground">Cruz Alta - RS</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
          onSubmit={handleSubmit}>

          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Nome</label>
            <input
              type="text" required maxLength={120}
              value={nome} onChange={(e) => setNome(e.target.value)}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Seu nome completo" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">E-mail</label>
            <input
              type="email" required maxLength={255}
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="seu@email.com" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Mensagem</label>
            <textarea
              rows={5} required maxLength={3000}
              value={mensagem} onChange={(e) => setMensagem(e.target.value)}
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Descreva seu projeto..." />
          </div>
          <button
            type="submit" disabled={enviando}
            className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60">
            {enviando ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </motion.form>
      </div>
    </section>);

};

export default ContactSection;